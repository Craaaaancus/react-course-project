import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AboutPageAsync } from "./pages/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./utils";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '',
            lazy: () => import('./pages/HelloPage')
          },
          {
            path: 'about',
            lazy: () => import('./pages/AboutPage')
          }
        ]
      },
    ]
  );
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>
        Click!
      </button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
};

export default App;
