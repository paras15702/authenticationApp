import NavBar from "./NavBar";
import app from "./FirebaseConsfig";
import {useState} from "react";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function About()
{
	const nav = useNavigate();
	
	useEffect( ()=>{
		
		let un = localStorage.getItem("un");
		if(un==null)
		{
			nav("/login");	
		}
	},[]);

	


	

	return(
	
		<>
			<NavBar/>
			<center>
				<h1>About Page</h1>
		
			
			</center>

		</>


	);
}