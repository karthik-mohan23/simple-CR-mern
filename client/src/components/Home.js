import { useNavigate } from "react-router-dom"

const Home = () => {
    
    const navigate = useNavigate()
    
    return (
    <div>
        <h1>Hi there,</h1>
        <button onClick={()=> navigate("/signup")}>Sign up</button>
    </div>
  )
}
export default Home