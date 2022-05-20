import { CategoryCard } from "../../components/card/categoryCard"
import "./homepage.css"
import { useEffect,useState } from "react"
import axios from 'axios';
export const Homepage = ()=>{
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            const { data: { categories } } = await axios.get("/api/categories");
            setCategory(categories);
        })()
    }, [])

    return(
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <img src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?t=st=1653068629~exp=1653069229~hmac=a022683aaa8b77a26fa96c17e59626c8db1adb06d77e5be52694bba3dd06ef0c&w=740" alt="quiz"/>
                </div>
                <div className="p-4 flex justify-center content-center flex-col">
                    <p className="text-4xl font-semibold">Quizzes to let your inner child be curious</p>
                    <p className="py-4">Check you knowledge in various domains.</p>
                </div>
            </div>
            <div>
                <p className="text-4xl text-center py-6">Featured Category</p>
                <div className="grid grid-cols-3 justify-items-center">
                {category.map(data => <CategoryCard categoryData={data} key={data._id} />)}
                </div>
            </div>
        </div>
    )
}