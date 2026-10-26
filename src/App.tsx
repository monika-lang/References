import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomePage from "./pages/home.js";
import ProfilePage from "./pages/profile.js";
import RootLayout from "./root_layout.js";
import React from "react";
import FormFocusPage from "./pages/FormFocus.js";
import TimerPage from "./pages/timer.js";
import PreviousStatePage from "./pages/PreviousState.js";
import RenderCounterPage from "./pages/renderCounter.js";
import DropDown from "./pages/DropDown.js";
import VideoPlayer from "./pages/VideoPlayer.js";
import SmoothScroll from "./pages/ScrollSmooth.js";
import AutoShiftPage from "./pages/AutoShift.js";
import ScalesPage from "./pages/Scales.js";
import RefOnlySendPage from "./pages/RefOnlySend.js";


const NotFoundPage = ()=><div>
    <h1 className="text-7xl text-red-950 uppercase font-bold">404 Not Found. </h1>
    <Link to='/'>Go gome</Link>
</div>

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'profile/:id',
                element: <ProfilePage/>
            },
            {
                path: 'profile',
                element: <ProfilePage/>
            },
            {
                path: "focus",
                element: <FormFocusPage/>
            },
            {
                path: "timer",
                element: <TimerPage/>
            },
            {
                path: "prev-state",
                element: <PreviousStatePage/>
            },
            {
                path: "render",
                element: <RenderCounterPage/>
            },
            {
                path: "dropdown",
                element: <DropDown/>
            },
            {
                path: "videoplayer",
                element: <VideoPlayer/>
            },
            {
                path: "smoothscroll",
                element: <SmoothScroll/>
            },
            {
                path: "autoshift",
                element: <AutoShiftPage/>
            },
            {
                path: "scales",
                element: <ScalesPage/>
            },
            {
                path: "refonly",
                element: <RefOnlySendPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

const App:React.FC = ()=>{
    return <RouterProvider router={router}/>
}
export default App;