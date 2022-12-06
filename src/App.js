
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Topics from './component/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },

        {
          path: '/topics/:topicsId',
          loader: async ({ params }) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.topicsId}`),
          element: <Topics />
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
