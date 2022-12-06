import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllQuestion = ({ prevQuestion, score, setScore }) => {

    const { correctAnswer, question, options } = prevQuestion;
    const [isActive, setIsActive] = useState(true);

    const handleAnsView = () => {
        setIsActive(current => !current);
    };

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            const newScore = score + 1;
            setScore(newScore)
            toast.success("Your Answer is Correct !")
        } else {
            setScore(score)
            toast.error('Your answer is wrong!')
        }
    }




    return (
        <div>

            <ToastContainer />
            <div className=' border-2 rounded border-gray-800 mt-20 mx-5'>
                <div className='flex justify-between justify-center'>
                    <h2 className='text-xl font-bold my-4 w-11/12 ml-2'>{question.slice(3, -4)}</h2>

                    <EyeIcon onClick={handleAnsView} className={isActive ? 'h-6 w-6 text-black-500 mt-8 mx-3 cursor-pointer' : 'hidden'} />
                    <EyeSlashIcon onClick={handleAnsView} className={isActive ? 'hidden' : 'h-6 w-6 text-black-500  mt-8 mx-3 cursor-pointer'} />

                </div>

                <div>
                    {
                        options.map((option, ind) => (
                            <p className='border-4 border-violet-900 my-6 w-9/12 p-2 mx-auto cursor-pointer text-xl hover:bg-violet-900 hover:text-white' key={ind} onClick={() => handleAnswer(option, correctAnswer)} >
                                {option}
                            </p>
                        ))
                    }
                </div>

                <div className={isActive ? 'hidden' : ''}>
                    <div className=' my-6 w-9/12 p-2 mx-auto cursor-pointer bg-violet-900 text-white rounded'>
                        <span className='mr-2 font-bold'>
                            Correct Answer:
                        </span>
                        {
                            correctAnswer
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllQuestion;
