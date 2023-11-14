import './App.css'
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound.tsx";
import SecuredRoute from "./components/routing/SecuredRoute.tsx";
import Dashboard from "./pages/Dashbord.tsx";


function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<SecuredRoute />}>
                    <Route path='/dashboard' element={<Dashboard /> }/>
                </Route>
                <Route path={'/'} element={<Login />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
   )
}

export default App
