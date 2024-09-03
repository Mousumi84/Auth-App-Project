import axios from "axios";

const Login = ({setisUserLoggedin}) => {

    async function submit(e) {
        e.preventDefault();

        let email=e.target.email.value;
        let password=e.target.password.value;
    
     //----------HTTP REQUEST----------------
        try {
            const response = await axios({
                url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
                method: "POST",
                data: {
                    email,
                    password
                }
            });
            console.log(response);
            localStorage.setItem("token",response.data.token);
            //console.log(response.data.token);
            setisUserLoggedin(true);
        }
            
        catch (error) {
            console.log(error);
        }
    }

    return ( <>
        <form onSubmit={submit}>
            <input id="email" placeholder="Email" name="email" required></input>
            <input id="pswrd" placeholder="Password" name="password" required></input>
            <button>Login</button>
        </form>
    </>);
}

export default Login; 




// bhuvan243@gmail.com
// bhuvan243