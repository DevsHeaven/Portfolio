import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Layout from './pages/layout.jsx';


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:'about',
                element:<About/>,
            },
        ]
    }],
    {
        basename:"/Portfolio",
    }
);