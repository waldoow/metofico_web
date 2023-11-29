import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound';
import SecuredRoute from './components/routing/SecuredRoute';
import Dashboard from './pages/Dashbord';
import  ThemeProvider  from '@/context/theme-provider.tsx'
import Users from '@/pages/Users';
import Scripts from '@/pages/Scripts';
import Invitations from '@/pages/Invitations';
import SidebarProvider from '@/context/sidebar-provider.tsx'

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <SidebarProvider defaultValue={'open'} storageKey={'sidebar-status'}>
                    <Routes>
                        <Route element={<SecuredRoute />}>
                            <Route path='/dashboard' element={<Dashboard /> }/>
                        </Route>

                        <Route element={<SecuredRoute />}>
                            <Route path='/users' element={<Users /> }/>
                        </Route>

                        <Route element={<SecuredRoute />}>
                            <Route path='/scripts' element={<Scripts /> }/>
                        </Route>

                        <Route element={<SecuredRoute />}>
                            <Route path='/invitations' element={<Invitations /> }/>
                        </Route>

                        <Route path={'/login'} element={<Login />} />
                        <Route path={'*'} element={<NotFound />} />
                    </Routes>
                </SidebarProvider>
            </ThemeProvider>
        </BrowserRouter>
   )
}

export default App
