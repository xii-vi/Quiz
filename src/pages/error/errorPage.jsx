import { Link } from 'react-router-dom';
import errorPage from "../../assest/errorPage.png"
export const ErrorPage = () => {
    return (
            <div className='text-center h-screen'>
                <div className='flex justify-center'><img className="w-fit h-96" src={errorPage} alt="error-page" /></div>
                <p className='text-3xl py-4'>Page not found</p>
                <Link to="/"><button className='rounded-md px-4 py-2 bg-indigo-500 text-slate-50'>Explore Quiz</button></Link>
            </div>
    )
}