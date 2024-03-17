
import { useNavigate } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

function AccUser({userName}) {
    const navigate = useNavigate();
    return (
        <div className="flex border-2 justify-between mt-7 border-2 p-3 mr-3 rounded-lg hover:border-cyan-500">
            <span className="my-5 text-2xl ml-7 font-mono font-black text-gray-700" >{userName.firstName} {userName.lastName}</span>
            <button className="mt-3 h-1/2 mr-16 p-3 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
            onClick={()=>{
                navigate("/send?id=" + userName._id + "&name=" + userName.firstName);
            }} 
            >
                Send money
            </button>
            
        </div>
    )
}
export default AccUser
