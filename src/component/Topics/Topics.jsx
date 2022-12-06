import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestion from '../AllQuestion/AllQuestion';

const Topics = () => {
    const quizData = useLoaderData();
    const { name, questions } = quizData.data
    const [score, setScore] = useState(0);


    return (
        <div>
            <h1 className='text-5xl font-bold'>{name}</h1>
            <h3 className='mt-6 text-xl my-6 w-64 p-2 mx-auto  bg-violet-900 text-white rounded'>Your score is : {score}</h3>
            <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1'>
                {
                    questions.map(prevQuestion => <AllQuestion key={prevQuestion.id} prevQuestion={prevQuestion} score={score} setScore={setScore} />)
                }
            </div>
        </div>
    );
};

export default Topics;




