import NavBar from "./NavBar";
import app from "./FirebaseConsfig";
import {useState} from "react";
import {getAuth , sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function ForgotPassword()
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
	const [ans,setAns]=useState("");


	const save = (event) => {
			
			event.preventDefault();
			const auth=getAuth();	
			sendPasswordResetEmail(auth,un)
			.then(res=>{
				
				nav("/login");
			})
			.catch(err=>setAns("issue "+err))
	}


	return(
	
		<>
			<NavBar/>
			<center>
				<h1>Forgot Password Page</h1>
				<form onSubmit={save}>
					<input type="email" placeholder="enter reg email" onChange={(event)=>{setUn(event.target.value);}}/>
					<br/><br/>

					<input type="submit" value="Reset"/>
				</form>
				<h1> {ans} </h1>
			
			</center>

		</>

	);
}