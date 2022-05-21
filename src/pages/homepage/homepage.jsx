import { CategoryCard } from "../../components/card/categoryCard"
import { useEffect,useState } from "react"
import axios from 'axios';
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
export const Homepage = ()=>{
    const [category, setCategory] = useState([]);
    const {authState:{userLogin},authDispatch}=useAuth();
    useEffect(() => {
        (async () => {
            const { data: { categories } } = await axios.get("/api/categories");
            setCategory(categories);
        })()
    }, [])
    const logoutHandler = () => {
        localStorage.clear();
        authDispatch({ type: "USER_LOGOUT" })
    }
    return(
        <div>
            <div className="grid sm:grid-cols-2 xs:grid-cols-1">
                <div>
                    <img src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?t=st=1653068629~exp=1653069229~hmac=a022683aaa8b77a26fa96c17e59626c8db1adb06d77e5be52694bba3dd06ef0c&w=740" alt="quiz"/>
                </div>
                <div className="p-4 flex justify-center content-center flex-col">
                    <p className="text-4xl font-semibold">Quizzes to let your inner child be curious</p>
                    <p className="py-4">Check you knowledge in various domains.</p>
                    {userLogin?<button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 md:w-80 sm:w-32" onClick={logoutHandler}>Logout</button>:
            <Link to="/login"><button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 md:w-80 sm:w-32">Login</button></Link>}
                </div>
                
            </div>
            <div>
                <p className="text-4xl text-center py-6">Featured Category</p>
                <div className="grid gap-x-3 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xs:p-2 justify-items-center">
                {category.map(data => <CategoryCard categoryData={data} key={data._id} />)}
                </div>
            </div>
        </div>
    )
}