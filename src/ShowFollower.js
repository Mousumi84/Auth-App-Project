import { useState,useEffect } from "react";
import axios from "axios";

function Followers({setisUserLoggedin}) {

    function logout() {
        console.log(localStorage);
        localStorage.clear()
        console.log(localStorage);
        setisUserLoggedin(false);
    }

    const [followersData,setfollowersData]=useState({
        apiStatus: 0,                  //apiStatus : 0(initial) | 1(pending) | 2(success) | 3(error)
        data: null
    })


    useEffect(() => {

        (async function () {
            try {
                const token=localStorage.getItem("token");
                setfollowersData({apiStatus: 1})
                const response=await axios({
                    url: "https://node-auth-jwt-w78c.onrender.com/user/followers",
                    method: "GET",
                    headers: {
                            Authorization: `Bearer: ${token}`
                    }
                });
                console.log(response.data);
                setfollowersData({apiStatus: 2, data: response.data})
            }
            catch (error) {
                setfollowersData({apiStatus: 3})
                console.log(error);

                //If Api Status is wrong , logout 
                const StatusCode=error?.response?.status;

                if(StatusCode === 401 || StatusCode === 403)
                {
                    localStorage.removeItem("token");
                    setisUserLoggedin(true);
                }
            }
        })(); 

    },[]);

    if(followersData.apiStatus === 0 || followersData.apiStatus === 1) {
        return <p>Fetching Followers . . .</p>
    }

    if(followersData.apiStatus === 3) {
        return <p>Error</p>
    }

        let count=0;
    return (<div id="followerslist">
        <h1>Followers List :</h1>
        {
            followersData.data.map(people => {
                count++;
                return <h4 key={`${people.name}${count}`}>{people.name}</h4>
            })
        }



        <button className="btn" onClick={logout}>Logout</button>
    </div>)
}

export default Followers;