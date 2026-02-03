import { createBrowserRouter } from "react-router";
import { AnimatedEnvelope } from "../pages/AnimatedEnvelope";
import { Letter } from "../pages/Letter";
import { Yay } from "../pages/Yay";
import { DefaultLayout } from "../layout/DefaultLayout";
import { ViewEnvelope } from "../pages/ViewEnvelope";
import { Main } from "../pages/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
        children: [
            { path: "main", element: <Main /> },
            { path: "envelope", element: <ViewEnvelope /> },
            { path: "open-envelope", element: <AnimatedEnvelope /> },
            { path: "letter", element: <Letter /> },
            { path: "yay", element: <Yay /> },
        ],
    },
]);
