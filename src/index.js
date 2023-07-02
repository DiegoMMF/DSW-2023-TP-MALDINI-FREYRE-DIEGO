import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FoxDetails } from './routes/FoxDetails';
import { Registration } from './routes/Registration';
import { Root } from './routes/Root';
import { Foxes } from './components/Foxes';
import { ErrorPage } from './ErrorPage';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./custom.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "pets/:id",
                element: <FoxDetails />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
            {
                path: "",
                element: <Foxes />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);