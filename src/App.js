import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Register = lazy(() => import('./Pages/Register'));
const Login = lazy(() => import('./Pages/Login'));
const DashboardPage = lazy(() => import('./Components/DashboardPage/DashboardPage'));
const PersonalInfo = lazy(() => import('./Pages/PersonalInfo'));
const Accounts = lazy(() => import('./Pages/Accounts'));
const Jobs = lazy(() => import('./Pages/Jobs'));
const UserDetails = lazy(() => import('./Pages/UserDetails'));
const Hiring = lazy(() => import('./Pages/Hiring'));
const Blog = lazy(() => import('./Pages/Blog'));
const BlogDetail = lazy(() => import('./Pages/BlogDetail'));
const Legal = lazy(() => import('./Pages/Legal'));
const Support = lazy(() => import('./Pages/Support'));
const SupportProcess = lazy(() => import('./Pages/SupportProcess'));
const Business = lazy(() => import('./Pages/Business'));
const Investors = lazy(() => import('./Pages/SiteA/Investors'));
const Contact = lazy(() => import('./Pages/SiteA/Contact'));

function App() {
    return (
        <>
            <BrowserRouter>
                <Suspense>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/personal-info" element={<PersonalInfo/>}/>
                        <Route path="/accounts" element={<Accounts/>}/>
                        <Route path="/jobs" element={<Jobs/>}/>
                        <Route path="/user-details" element={<UserDetails/>}/>
                        <Route path="/hiring" element={<Hiring/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog-details" element={<BlogDetail/>}/>
                        <Route path="/legal" element={<Legal/>}/>
                        <Route path="/support" element={<Support/>}/>
                        <Route path="/support-process" element={<SupportProcess/>}/>
                        <Route path="/business" element={<Business/>}/>
                        {/* Site A */}
                        <Route path="/sitea-investors" element={<Investors/>}/>
                        <Route path="/sitea-contact" element={<Contact/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
