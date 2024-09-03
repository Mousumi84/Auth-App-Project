import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Followers from "./ShowFollower";

function Home() {
    const [isUserLoggedin,setisUserLoggedin]=useState(() => Boolean(localStorage.getItem("token"))); // if token is there => true
    console.log("isUserLoggedin",isUserLoggedin);
    return (<>
        {
            isUserLoggedin ? <Followers setisUserLoggedin={setisUserLoggedin}/> : <Auth setisUserLoggedin={setisUserLoggedin}/>
        }
    </>)
}

export default Home;


function Auth ({setisUserLoggedin}) {
    const [showLogin,setShowLogin]=useState(true);

    return (<>
            {showLogin ? <Login setisUserLoggedin={setisUserLoggedin} /> : <Signup />}
            <button className="btn" onClick={()=>setShowLogin(!showLogin)}>LOGIN / SIGNUP</button>
        </>
    )
}

/*In the Home component try to understand the "setinUserLoggedin" concept properly 
  initialy if token is present in the localstorage then bollean convertion is true  ->
      in return in ternary statement "isUserLoggedin" ~>> true , Follower component

  initialy if token is not present in the localstorage then bollean convertion is false  ->
      in return in ternary statement "isUserLoggedin" ~>> false , Auth component   
    */