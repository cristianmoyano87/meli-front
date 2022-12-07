import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Items from './routes/items';
import Detail from './routes/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/items",
        element: <Items/>,
        errorElement: <ErrorPage />,
      },    
      {
        path: "/items/:id",
        element: <Detail/>,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

function App() {
  return ( 
    <RouterProvider router={router} />
  );
}

export default App;
