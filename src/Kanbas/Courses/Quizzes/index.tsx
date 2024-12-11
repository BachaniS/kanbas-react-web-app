import { BsGripVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import EditAccess from "../EditAccess";
import { useSelector, useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { addQuiz, setQuizzes, updateQuiz } from "./reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { TiCancel } from "react-icons/ti";
import EditAccessStudents from "../EditAccessStudents";
import ContextMenu from "./ContextMenu";
import * as coursesClient from "../client"
import * as quizClient from "./client"
import { useEffect, useState } from "react";


export default function Quizzes() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const filteredQuizzes = quizzes.filter((quiz: { course: string | undefined; }) => quiz.course === cid);
    

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    function getQuizAvailability(qid: string): string {
        const quiz = filteredQuizzes.find((q: { _id: string; }) => q._id === qid);
        if (!quiz) {
            return "Quiz not found";
        }
        const currentDate = new Date();
        const availableDate = new Date(formatDate(quiz.available_date));
        const availableUntilDate = new Date(formatDate(quiz.available_until_date));

        if (currentDate < availableDate) {
            return `Not available until ${formatDate(availableDate.toLocaleDateString())}`;
        } else if (currentDate >= availableDate && currentDate <= availableUntilDate) {
            return "Available";
        } else {
            return "Closed";
        }
    }

    const [questionCounts, setQuestionCounts] = useState<{ [key: string]: number }>({});
    const [scores, setScores] = useState<{ [key: string]: string }>({});
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
    const [quizAnswers, setQuizAnswers] = useState<any[]>([]);

    const fetchQuestionNumber = async (qid: string) => {
        const questions = await quizClient.findQuestionForQuiz(qid);
        return questions.length;
    };

    const prepareNewAnswers = async (qid: string) => {
        const results = await quizClient.findQuestionForQuiz(qid);
        setQuizQuestions(results);
        var resultAnswers = await quizClient.getLatestAnswersForQuiz(
            qid,
            currentUser._id
        );

        resultAnswers.sort((ans1: any, ans2: any) => ans1.sequence - ans2.sequence);
        setQuizAnswers(resultAnswers);
    };

    const calculateScore = async (qid: string) => {
        const [questions, answers] = await Promise.all([
            quizClient.findQuestionForQuiz(qid),
            quizClient.getLatestAnswersForQuiz(qid, currentUser._id),
        ]);

        answers.sort((a: any, b: any) => a.sequence - b.sequence);

        let correctScore = 0;
        let totalScore = 0;

        answers.forEach((answer: any) => {
            const matchedQuestion = questions.find((q: any) => q.sequence === answer.sequence);

            if (matchedQuestion) {
                const points = parseInt(matchedQuestion.points || "0", 10);
                totalScore += points;
                if (answer.correct) {
                    correctScore += points;
                }
            }
        });

        return totalScore > 0 ? `${((correctScore / totalScore) * 100).toFixed(2)}%` : "0%";
    };

    useEffect(() => {
        const fetchAllQuestionCounts = async () => {
            const counts: { [key: string]: number } = {};
            for (const quiz of quizzes) {
                counts[quiz._id] = await fetchQuestionNumber(quiz._id);
            }
            setQuestionCounts(counts);
        };

        const fetchAllScores = async () => {
            const scores: { [key: string]: string } = {};
            for (const quiz of quizzes) {
                scores[quiz._id] = await calculateScore(quiz._id);
            }
            setScores(scores);
        };

        fetchAllScores();
        fetchAllQuestionCounts();
    }, [quizzes]); 

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    const createQuizForCourse = async () => {
        if (!cid) return;
        const newQuiz = {
            title: 'New Quiz',
            description: '',
            course: cid,
            type: 'Graded Quiz',
            points: '100',
            group: 'Quizzes',
            shuffle_answers: true,
            time_limit: '20',
            has_time_limit: true,
            multiple_attempts: false,
            attempts: 1,
            show_correct: false,
            access_code: '',
            one_question_at_a_time: true,
            webcam_required: false,
            lock_questions_after_answering: false,
            due_date: '',
            available_date: '',
            available_until_date: ''
        }
        const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
        dispatch(addQuiz(quiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`, { state: { isNewQuiz: true } });
    };
    const saveQuiz = async (quiz: any) => {
        await quizClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };




    return (
        <div id="wd-assignments" className="pb-1">

            <div className="wd-assignment-controls">
                <div className="wd-search-assignment input-group float-start w-25">
                    <span className="input-group-text input-lg">
                        <IoIosSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        placeholder="Search for Quiz"
                        className="form-control form-control-lg"
                    />
                </div>
                <EditAccess>
                    <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                        <IoEllipsisVertical className="fs-4" />
                    </button>
                    <button id="wd-add-quiz"
                        onClick={() => { createQuizForCourse() }}
                        className="btn btn-lg btn-danger me-1 float-end">
                        + Quiz</button>
                </EditAccess><br /><br /><br />
            </div>


            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Quizzes
                        <div className="wd-percentage float float-end">
                            <span className="wd-percentage border border-dark rounded rounded-pill p-2 me-3"> 40% of Total </span>
                            <FaPlus className="me-3" />
                            <LessonControlButtons />
                        </div>
                    </div>

                    <EditAccess>
                        <ul className="wd-assignments list-group rounded-0 ">
                            {filteredQuizzes.length === 0 ?
                                <p className=" text-secondary border-none m-2">Click "+ Quiz" to create a new quiz</p>
                                : <></>}
                            {filteredQuizzes.map((quiz: {
                                _id: string;
                                title: string;
                                description: string;
                                course: string;
                                type: string;
                                points: string;
                                group: string;
                                shuffle_answers: boolean;
                                time_limit: string;
                                has_time_limit: boolean;
                                multiple_attempts: boolean;
                                attempts: string;
                                show_correct: boolean;
                                access_code: string;
                                one_question_at_a_time: boolean;
                                webcam_required: boolean;
                                lock_questions_after_answering: boolean;
                                due_date: string;
                                available_date: string;
                                available_until_date: string;
                                published: boolean;
                            }) => {
                                const modalId = `modal-${quiz._id}`;
                                return (
                                    <li className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                                        key={quiz._id}>
                                        <button
                                            onClick={() => {
                                                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`, { state: { isNewQuiz: false } });
                                            }}
                                            className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                                            <BsGripVertical className="me-4 fs-3" />
                                            <TfiWrite className="me-4 fs-3 text-success" />
                                            <span className="wd-assignment-text me-2">
                                                <b>{quiz.title}</b>
                                                <br />
                                                <span className="text-danger"> <b>{getQuizAvailability(quiz._id)}</b> </span> | {questionCounts[quiz._id]} Questions <br />
                                                <b> Due</b> {formatDate(quiz.due_date)} | {quiz.points} pts
                                            </span>
                                        </button>
                                        <div className="d-flex align-items-center">
                                            <div className="float-end">
                                                <button className="btn btn-default p-0"
                                                    onClick={() => {
                                                        saveQuiz({
                                                            ...quiz,
                                                            published: !quiz.published
                                                        })
                                                    }
                                                    }>
                                                    {!quiz.published ? <TiCancel className="fs-3" /> : <GreenCheckmark />}
                                                </button>
                                                <button id={`context-menu-btn-${quiz._id}`}
                                                    className="btn btn-default ms-2 fs-5"
                                                    data-bs-toggle="modal" data-bs-target={`#modal-${quiz._id}`}>
                                                    <IoEllipsisVertical className="fs-4" />
                                                </button>
                                            </div>
                                            <ContextMenu dialogTitle={`Quiz Context Menu`} modalId={modalId} quiz={quiz} />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </EditAccess>
                    <EditAccessStudents>
                        <ul className="wd-assignments list-group rounded-0">
                            {filteredQuizzes.map((quiz: {
                                _id: string;
                                title: string;
                                description: string;
                                course: string;
                                type: string;
                                points: string;
                                group: string;
                                shuffle_answers: boolean;
                                time_limit: string;
                                has_time_limit: boolean;
                                multiple_attempts: boolean;
                                attempts: string;
                                show_correct: boolean;
                                access_code: string;
                                one_question_at_a_time: boolean;
                                webcam_required: boolean;
                                lock_questions_after_answering: boolean;
                                due_date: string;
                                available_date: string;
                                available_until_date: string;
                                published: boolean;
                            }) =>
                                quiz.published ? (
                                    <li
                                        key={quiz._id}
                                        className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                        <button
                                            onClick={() => {
                                                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/QuizScreen`);
                                            }}
                                            className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                                            <BsGripVertical className="me-4 fs-3" />
                                            <TfiWrite className="me-4 fs-3 text-success" />
                                            <span className="wd-assignment-text me-2">
                                                <b>{quiz.title}</b>
                                                <br />
                                                <span className="text-danger"> <b>{getQuizAvailability(quiz._id)}</b> </span> | {questionCounts[quiz._id]} Questions <br />
                                                <b> Due</b> {formatDate(quiz.due_date)} | {quiz.points} pts | Score {scores[quiz._id]}
                                            </span>
                                        </button>
                                        <div className="d-flex align-items-center">
                                            <div className="float-end">
                                                <GreenCheckmark />
                                                <IoEllipsisVertical className="fs-4" />
                                            </div>
                                        </div>
                                    </li>
                                ) : null 
                            )}
                        </ul>
                    </EditAccessStudents>
                </li>
            </ul>
        </div >
    );
}
