import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FoxDetails } from './routes/FoxDetails';
import { Registration } from './routes/Registration';
import { Root } from './routes/Root';
import { Foxes } from './components/Foxes';
import { ErrorPage } from './ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';
import { Slides } from './layouts/Slides';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "foxes",
                element: <Slides />,
            },
            {
                path: "foxes/:foxName",
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

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);