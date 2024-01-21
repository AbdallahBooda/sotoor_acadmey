import React from 'react';
import RootLayout from './Layout/RootLayout';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Sotoor_Ecommerce from './Pages/Sotoor-Ecommerce';
import Exams_Summary from './Pages/Exams_Summary';
import Login from './Pages/Login';
import Registration from './Pages/Registration';




const router = createBrowserRouter (
    createRoutesFromElements(

        <Route path='/' element={<RootLayout />}>
            <Route path='home' element={<Home />} />
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='sotoor-ecommerce' element={<Sotoor_Ecommerce />} />
            <Route path='exams_summary' element={<Exams_Summary />} />
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
        </Route>

    )
)



const App = () => {
    return (  
        <RouterProvider router={router} />
    );
}
 
export default App;