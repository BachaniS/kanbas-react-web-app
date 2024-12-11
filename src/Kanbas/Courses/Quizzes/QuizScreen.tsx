import "../../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as quizClient from "./client";
import TakingQuestionContainer from "./TakingQuestionContainer";
import { RiErrorWarningLine } from "react-icons/ri";
import { LiaPencilAltSolid } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useCallback } from "react";

export default function QuizScreen({ preview }: { preview: boolean }) {
  const { qid, cid } = useParams();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizInfo, setQuizInfo] = useState<any | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [timeUpdated, setTimeUpdated] = useState<string>(new Date().toString());
  const [attempt, setAttempt] = useState<number>(1);
  const [corrections, setCorrections] = useState<boolean>(false);

  const prepareNewAnswers = useCallback((
    resultAnswers: any[],
    results: any[],
    attemptNum: number
  ) => {
    if (Array.isArray(resultAnswers) && resultAnswers.length === 0) {
      resultAnswers = Array.from({ length: results.length }, () => ({
        quiz: qid,
        user: currentUser._id,
        answer: [],
        attempt: attemptNum,
        time_started: startDate,
      }));
      setStartDate(new Date());
    } else {
      setStartDate(
        resultAnswers.length > 0
          ? new Date(resultAnswers[0].time_started)
          : new Date()
      );
    }
    resultAnswers.sort((ans1: any, ans2: any) => ans1.sequence - ans2.sequence);
    setQuizAnswers(resultAnswers);
    setAttempt(attemptNum);
  }, [qid, currentUser._id, startDate]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const results = await quizClient.findQuestionForQuiz(qid as string);
      setQuizQuestions(results);
      const resultQuiz = await quizClient.getQuiz(qid as string);
      setQuizInfo(resultQuiz);

      var resultAnswers = await quizClient.getLatestAnswersForQuiz(
        qid as string,
        currentUser._id
      );
      if (
        (currentUser.role === "STUDENT" || currentUser.role === "FACULTY") &&
        Array.isArray(resultAnswers) &&
        resultAnswers.length > 0
      ) {
        setCorrections(true);
      }
      const newAttempt =
        Array.isArray(resultAnswers) && resultAnswers.length !== 0
          ? resultAnswers[0].attempt
          : 1;
      prepareNewAnswers(resultAnswers, results, newAttempt);
    };
    fetchQuiz();
  }, [qid, currentUser._id, currentUser.role, prepareNewAnswers]);

  const submitQuiz = async () => {
    quizAnswers.map(async (a) => await quizClient.createOrUpdateAnswer(a));
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const retakeQuiz = async () => {
    const nextAttempt = attempt + 1;
    const results = await quizClient.findQuestionForQuiz(qid as string);
    setQuizQuestions(results);
    prepareNewAnswers([], results, nextAttempt);
    setCorrections(false);
  };

  const updateAnswer = (updatedAnswer: any) => {
    setQuizAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer, idx) =>
        idx === questionIndex ? updatedAnswer : prevAnswer
      )
    );
  };

  const calculateScore = (): string => {
    let correctScore = 0;
    let totalScore = 0;
    quizAnswers.forEach((a) => {
      const matchedQuestion: any | undefined = quizQuestions.find(
        (q: any) => q.sequence === a.sequence
      );
      if (matchedQuestion) {
        const scorePerQ = parseInt(matchedQuestion.points);
        totalScore += scorePerQ;
        if (a.correct) {
          correctScore += scorePerQ;
        }
      } else {
        console.warn(`Question with sequence ${a.sequence} not found.`);
      }
    });
    if (totalScore === 0) return `0/0 or 0%`;
    return `${correctScore}/${totalScore} or ${(correctScore / totalScore) * 100}%`;
  };

  
  return (
    <div id="wd-quiz-taker">
      <h2>
        <b>{quizInfo?.title}</b>
      </h2>
      {preview && (
        <p className="p-2 bg-warning bg-gradient text-danger rounded">
          <RiErrorWarningLine className="text-danger me-1" />
          This is a preview of the published version of the quiz
        </p>
      )}
      <p>Started: {startDate.toString()}</p>
      <h2>Quiz Intructions</h2>
      <hr />
     
   
      <div
        id="wd-quiz-questions-and-answers"
        className="row d-flex flex-row justify-content-center mb-2"
      >
        {quizQuestions.length > 0 && quizAnswers.length > 0 && (
          <TakingQuestionContainer
            question={quizQuestions.find(
              (q: any) => q.sequence === questionIndex
            )}
            questionAnswer={quizAnswers[questionIndex]}
            updateAnswer={updateAnswer}
            questionIndex={questionIndex}
            setTimeUpdated={setTimeUpdated}
            corrections={corrections}
          />
        )}
        <div className="d-flex flex-row justify-content-center mt-2">
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => setQuestionIndex(questionIndex - 1)}
              disabled={questionIndex === 0}
            >
              Prev
            </button>
          </div>
          {questionIndex < quizQuestions.length - 1 && (
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => setQuestionIndex(questionIndex + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {!corrections && (
        <div className="border d-flex p-2 mb-3 flex-row-reverse align-items-center">
          <button
            className="btn btn-secondary float-end me-2"
            onClick={submitQuiz}
          >
            Submit Quiz
          </button>
          <p className="me-2 float-end">Quiz saved at {timeUpdated}</p>
        </div>
      )}
      {corrections && (
        <div className="border d-flex p-2 mb-3 flex-row-reverse align-items-center">
          <button
            className="btn btn-secondary float-end me-2"
            onClick={retakeQuiz}
            disabled={
              !quizInfo.multiple_attempts ||
              (quizInfo.multiple_attempts &&
                attempt >= parseInt(quizInfo.attempts))
            }
          >
            Retake Quiz
          </button>
          <p className="me-2 text-secondary">Attempt: {attempt}</p>
          <p className="me-2 text-success">Score: {calculateScore()}</p>
        </div>
      )}

      {preview && (
        <p
          className="border bg-secondary p-2 mb-3 rounded"
          onClick={() =>
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`)
          }
        >
          <LiaPencilAltSolid className="me-2" />
          Keep editing this quiz
        </p>
      )}

      <h3>Questions</h3>
      <div className="list-group">
        {quizQuestions.map((quizQuestion: any, idx: number) => (
          <ul className="text-danger" onClick={() => setQuestionIndex(idx)}>
            <FaRegQuestionCircle className="text-secondary me-1" />
            {idx === questionIndex ? (
              <b>{quizQuestion.title}</b>
            ) : (
              <span>{quizQuestion.title}</span>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
