import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Home = () => {
    const quiz = useLoaderData();

    const navigate = useNavigate();

    const startHandleQuiz = topic => {
        navigate(`/topics/${topic.id}`)
    }

    return (
        <div>
            <div>
                <h4 className='text-3xl mt-32 mb-10'>Quia provides educators with the tools to create, customize, and share learning activities.</h4>
                <img className='w-9/12 h-96 m-auto rounded-md' src="https://media.istockphoto.com/photos/quiz-sign-banner-picture-id478736262?b=1&k=20&m=478736262&s=170667a&w=0&h=I4mhKNKiGNRAXPaAP_hqnDHIlKn7hgLJXZQpw4JfDZY=" alt="" />
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-20 bg-gray-900 py-10'>
                {
                    quiz.data.map(topic => (
                        <div key={topic.id} className='border-2 border-b-0 rounded mx-auto relative h-80'>
                            <img className='w-48' src={topic.logo} alt="" />
                            <div>
                                <h4 className='text-white text-2xl font-bold mt-2'>{topic.name}</h4>
                                <p className='text-white mt-2 '>Quiz: {topic.total}</p>
                                <div>
                                    <button onClick={() => startHandleQuiz(topic)} className='text-white bg-sky-700 px-6 py-2 my-2 w-full absolute left-0 text-xl'>Start Quiz <ArrowRightIcon className="text-white h-6 w-6 ml-32 mt-[-22px]" /></button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;


