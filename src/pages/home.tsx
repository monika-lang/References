import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleButton = ()=>{
        // navigate('/profile');
        // navigate('/profile', {replace: true});
        navigate('/profile', {state:{fromLogin:true}});
    }
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButton}>Next page</button>

            <h1 className="text-4xl font-bold">Site map</h1>
            <hr className="border-2 border-blue-500"/>
            <ul className="text-blue-600 text-2xl underline">
                <li><Link className="hover:text-blue-800" to="/focus">Focus page</Link></li>
                <li><Link className="hover:text-blue-800" to="/timer">Timer page</Link></li>
                <li><Link className="hover:text-blue-800" to="/prev-state">Previous state page</Link></li>
                <li><Link className="hover:text-blue-800" to="/render">Render Count page</Link></li>
                <li><Link className="hover:text-blue-800" to="/dropdown">Dropdown page</Link></li>
                <li><Link className="hover:text-blue-800" to="/videoplayer">VideoPlayer page</Link></li>
                <li><Link className="hover:text-blue-800" to="/smoothscroll">Smooth scroll page</Link></li>
                <li><Link className="hover:text-blue-800" to="/autoshift">Auto shift page</Link></li>
                <li><Link className="hover:text-blue-800" to="/scales">Scales page</Link></li>
                <li><Link className="hover:text-blue-800" to="/refonly">Ref only page</Link></li>
            </ul>
        </div>

    )
}
export default HomePage;