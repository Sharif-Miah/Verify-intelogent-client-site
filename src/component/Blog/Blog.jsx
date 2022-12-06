import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 w-9/12 m-auto bg-gray-900 p-2 mb-9'>
                <h4 className='text-xl border-b-2 mb-6 text-white font-bold'>1.What is the purpose of react router?</h4>
                <p className='w-8/12 m-auto text-white p-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='border-2 w-9/12 m-auto bg-gray-900 p-2 mb-9'>
                <h4 className='text-xl border-b-2 mb-6 text-white font-bold'>2.How does Context API work?</h4>
                <p className='w-8/12 m-auto text-white p-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-2 w-9/12 m-auto bg-gray-900 p-2 mb-9'>
                <h4 className='text-xl border-b-2 mb-6 text-white font-bold'>3.What is useref hooks in React?</h4>
                <p className='w-8/12 m-auto text-white p-5'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div Ref myself, React will set its .current property to the corresponding DOM node whenever that node changes..</p>
            </div>
        </div>
    );
};

export default Blog;