import './App.css'
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound.tsx";
import SecuredRoute from "./components/routing/SecuredRoute.tsx";
import Dashboard from "./pages/Dashbord.tsx";
import { ThemeProvider } from "@/components/providers/theme-provider"

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Routes>
                    <Route element={<SecuredRoute />}>
                        <Route path='/dashboard' element={<Dashboard /> }/>
                    </Route>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
   )
}

export default App
