import React,{useState,useEffect} from 'react'
import '../styles/Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from "../firebase/config.js"
function Login() {
    const history = useHistory();
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const[error,setError] = useState("")

    useEffect(()=>{
        document.title = 'Amazon Sign In'
    },[])


    const handleLogin = (e) => {
        e.preventDefault();
        if(!email || !password){
            setError('Enter your email and Password')
        }
        else{
            auth.signInWithEmailAndPassword(email, password).then((auth)=>{
                if(auth){
                    history.push('/');
                }
            }).catch((err) => {
                setError(err.message);
            });
        }
    }
    const handleCreate = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
            if(cred){
                history.push('/');
            }
        }).catch((err) => {
            setError(err.message);
        })
    }
    
    return (
        <div className="login">
            <Link to="/">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="brand" 
            className="login_logo"/>
            </Link>
            {error?<div className="errorBox">
            <i class="fas fa-exclamation-triangle fa-lg" style={{"color":"#c40000"}}></i>
                <h2>There is some error</h2>
            </div>:null}

            <div className="login__container">
                        <h1>Login</h1>
                        <form action="">
                            <h5>Email</h5>
                            <input type="text" value={email} onChange={event=>setEmail(event.target.value)}/>
                            {error?<strong><small class="error">{error}</small></strong>:null}
                            <h5>Password</h5>
                            <input type="password" value={password} onChange={event=>setPassword(event.target.value)}/>
                            <button className="login_btn" disabled={email.length<5 && password.length.length<6} onClick={handleLogin} type="submit">SignIn</button>
                        </form>
                        <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>
                        <button className="create_account_btn" type="submit" onClick={handleCreate}>Create Account</button>
            </div>
        </div>
    )
}

export default Login
