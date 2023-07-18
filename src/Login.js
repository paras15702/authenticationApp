import NavBar from "./NavBar";
import app from "./FirebaseConsfig";
import {useState} from "react";
import {getAuth , signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function Login()
{
	const nav = useNavigate();
	
	useEffect( ()=>{
		
		let un = localStorage.getItem("un");
		if(un!=null)
		{
			nav("/");	
		}
	},[]);

	const [un,setUn]=useState("");
	const [pw,setPw]=useState("");
	const [ans,setAns]=useState("");


	const save = (event) => {
			
			event.preventDefault();
			const auth=getAuth();	
			signInWithEmailAndPassword(auth,un,pw)
			.then(res=>{
				localStorage.setItem("un",un);
				nav("/");
			})
			.catch(err=>setAns("issue "+err))
	}


	return(
	
		<>
			<NavBar/>
			<center>
				<h1>Login Page</h1>
				<form onSubmit={save}>
					<input type="email" placeholder="enter reg email" onChange={(event)=>{setUn(event.target.value);}}/>
					<br/><br/>
					<input type="password" placeholder="enter password" onChange={(event)=>{setPw(event.target.value);}}/>
					<br/><br/>
					<input type="submit" value="Login"/>
				</form>
				<h1> {ans} </h1>
			
			</center>

		</>

	);
}