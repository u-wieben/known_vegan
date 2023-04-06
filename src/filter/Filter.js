import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import { NavLink } from "../../node_modules/react-router-dom/dist/index";
import "./css/filter.css"

export default function Filter() {
	const [currentFilter, setCurrentFilter] = useState(); 
	const [filterTodo, setFilterTodo] = useState([]);
	const [recipesCount, setRecipesCount] = useState(1); 
	let filterStr = ""; 

	useEffect(() => {
		async function getData() {
			const result = await axios('http://localhost:5000/filter');
			setCurrentFilter(result.data.data.filterdefs); 
		}
		getData(); 
	},[]);

	useEffect(() => {
		async function getData() {
			filterStr = ""; 
			filterTodo.map((item) => filterStr = filterStr + "," + item);
			filterStr = (filterStr != "") ? filterStr.substring(1) : ""; 
			console.log('http://localhost:5000/filter/count?filter=' + filterStr); 
			// const result = await axios('http://localhost:5000/filter/count?filter='+filterStr);
			// setCurrentFilter(result.data.data.filterdefs);
		}
		getData(); 
	}, [filterTodo]);


	const addFilter = (id, checked) => {
		let current = currentFilter; 
		current.map((cat) => {
			let ind = cat.filter.findIndex((obj => obj.id == id)); 
			(ind > -1) && (cat.filter[ind].checked = checked); 
			const addFilterTodo = [];
		})
		let newFilterTodo = filterTodo;
		(checked == true) ? newFilterTodo.push(id) : newFilterTodo = newFilterTodo.filter((item) => (item != id)); 
		setCurrentFilter([...current]);
		setFilterTodo([...newFilterTodo]);
	}

  return (
		<div className="filter p-3">
			{
				(currentFilter !== undefined) && currentFilter.map((cat) =>
					<div key={cat.id}>
						<div>
							{cat.descr}
						</div>
						<div>
							{cat.filter.map((item) => (item.checked == true) &&
								<div key={item.id} onClick={() => addFilter(item.id, false)}>
									X {item.descr}
								</div> 
							)}
						</div>
						<div>
							{cat.filter.map((item) => (item.checked == false) &&
								<div key={item.id} onClick={() => addFilter(item.id,true) }>
									- {item.descr}
								</div> 
							)}
						</div>
					</div>
				)
			}
			{	filterTodo.forEach((item) => filterStr = filterStr + "," + item)}
			<NavLink to={`/list?filter=${(filterStr != "") ? filterStr.substring(1) : ""}`}>
				<button className="btn btn-info" type="button" disabled={(recipesCount == 0)}>
					{(recipesCount == 0) ? "Keine" : recipesCount} Rezept{ (recipesCount == 1) ? "" : "e"} 
				</button>
			</NavLink>
		</div>
  )
}
