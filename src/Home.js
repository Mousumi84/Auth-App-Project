import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Followers from "./ShowFollower";

function Auth ({setisUserLoggedin}) {
    const [showLogin,setShowLogin]=useState(true);

    return (<>
            {showLogin ? <Login setisUserLoggedin={setisUserLoggedin} /> : <Signup />}
            <button id="home" onClick={()=>setShowLogin(!showLogin)}>LOGIN / SIGNUP</button>
        </>
    )
}


function Home() {
    const [isUserLoggedin,setisUserLoggedin]=useState(() => Boolean(localStorage.getItem("token")));

    return (<>
        {
            isUserLoggedin ? <Auth setisUserLoggedin={setisUserLoggedin}/> : <Followers setisUserLoggedin={setisUserLoggedin} />
        }
    </>)
}

export default Home;