import "./css/styles.css"; 

import { useState } from "react";
import CookieHandler from 'universal-cookie';
import { Navigate, Navigation } from "../../node_modules/react-router-dom/dist/index";
import ContentWindow from "../_layout/ContentWindow";

export default function Cookies({modal}) {
	const [ windowShow, setWindowShow ] = new useState(true); 
	const cookie = new CookieHandler(); 

	const noCookies = () => {
		setWindowShow(false); 
	}

	const setCookies = () => {
		setWindowShow(false); 
		cookie.set("token", "jdfkslfjdkls", {secure: true}); 
	}

	return ( 
		<>
			{!windowShow && <Navigate replace to="/" /> }
			{windowShow &&
				<div className="d-flex justify-content-around align-items-center overlay">
					<ContentWindow title="Cookies">
						<p>Um deine Einstellungen zu speichern solltest du Cookies zulassen</p>
						<button type="button" onClick={noCookies}>Cookies ablehnen</button>
						<button type="button" onClick={setCookies}>Cookies zulassen</button>
					</ContentWindow>
				</div>} 
		</>
	) 
}