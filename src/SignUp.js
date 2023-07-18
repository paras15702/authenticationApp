import NavBar from "./NavBar";
import app from "./FirebaseConsfig";
import {useState} from "react";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function SignUp()
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
	const [pw1,setPw1]=useState("");
	const [pw2,setPw2]=useState("");
	const [ans,setAns]=useState("");


	const save = (event) => {
			
			event.preventDefault();
			if(pw1==pw2){
				const auth=getAuth();	
				createUserWithEmailAndPassword(auth,un,pw1)
				.then(res=>{
					nav("/login");
				})
				.catch(err=>setAns("issue "+err))
			}else{
				
				setAns("passwords did not match");	
			}
	}


	return(
	
		<>
			<NavBar/>
			<center>
				<h1>Login Page</h1>
				<form onSubmit={save}>
					<input type="email" placeholder="enter reg email" onChange={(event)=>{setUn(event.target.value);}}/>
					<br/><br/>
					<input type="password" placeholder="enter password" onChange={(event)=>{setPw1(event.target.value);}}/>
					<br/><br/>
					<input type="password" placeholder="confirm password" onChange={(event)=>{setPw2(event.target.value);}}/>
					<br/><br/>
					<input type="submit" value="Login"/>
				</form>
				<h1> {ans} </h1>
			
			</center>

		</>

	);
}