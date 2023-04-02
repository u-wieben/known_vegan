import "./css/styles.css"; 
import ContentWindow from "../_layout/ContentWindow";

export default function Cookies() {
	return ( 
		<div className="d-flex justify-content-around align-items-center overlay">
			<ContentWindow title="Cookies">
				<p>Um deine Einstellungen zu speichern solltest du Cookies zulassen</p>
				<button type="button">Cookies ablehnen</button>
				<button type="button">Cookies zulassen</button>
			</ContentWindow>
		</div> 
	) 
}