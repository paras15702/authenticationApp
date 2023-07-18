import NavBar from "./NavBar";

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function Home()
{
	const nav = useNavigate();
	const [un,setUn]=useState("");

	useEffect( ()=>{
		
		let un = localStorage.getItem("un");
		if(un==null)
		{
			nav("/login");	
		}else{
			setUn(un);	
		}
	},[]);

	const lo=(event)=>{
		event.preventDefault();
		localStorage.clear();
		nav("/login");
	}


	


	return(
	
		<>
			<NavBar/>
			<center>
				<h1>Home Page</h1>
				<h2>{un}</h2>
				<form onSubmit={lo}>
		
					<input type="submit" value="Logout"/>
				</form>
				
			
			</center>

		</>

	);
}