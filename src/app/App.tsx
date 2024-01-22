import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/root';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'utils';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: '',
          lazy: () => import('pages/hello'),
        },
        {
          path: 'about',
          lazy: () => import('pages/about'),
        },
      ],
    },
  ]);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Click!</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
