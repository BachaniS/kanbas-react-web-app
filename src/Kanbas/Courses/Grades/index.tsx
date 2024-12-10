import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as coursesClient from '../client';
import { useParams } from 'react-router-dom';

const Grades = () => {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [grades, setGrades] = useState<any[]>([]);

    useEffect(() => {
        const fetchGrades = async () => {
            if (!cid || !currentUser?._id) return;
            const quizzes = await coursesClient.findQuizForCourse(cid as string);
            const userGrades = quizzes.map((quiz: any) => {
                const userScore = quiz.answers.find((answer: any) => answer.user === currentUser._id);
                return {
                    title: quiz.title,
                    score: userScore ? userScore.score : 'Not Attempted',
                    totalPoints: quiz.points,
                };
            });
            setGrades(userGrades);
        };

        fetchGrades();
    }, [cid, currentUser]);

    return (
        <div id="wd-grades">
            <h1>Grades</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Quiz</th>
                        <th scope="col">Score</th>
                        <th scope="col">Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.title}</td>
                            <td>{grade.score}</td>
                            <td>{grade.totalPoints}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grades;