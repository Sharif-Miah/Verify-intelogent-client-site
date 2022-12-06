import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const scoreCharts = useLoaderData();
    const array = scoreCharts.data

    return (
        <div className='my-56'>
            <h1 className='text-3xl mt-10'>Skill Chart</h1>
            <ResponsiveContainer className='mx-auto' width={320} height={400}  >
                <BarChart data={array} >
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;