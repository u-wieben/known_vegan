export default function Content({children}) {
	return (<>
		<main className="d-flex justify-content-around align-items-center container-fluid flex-grow-1 overflow-auto">
			{children}
		</main>
	</>); 
}