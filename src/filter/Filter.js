import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import "./css/filter.css"

export default function Filter() {
	const [currentFilter, setCurrentFilter] = useState(); 

	useEffect(() => {
		async function getData() {
			const result = await axios('http://localhost:5000/filter');
			setCurrentFilter(result.data.data.filterdefs); 
		}
		getData(); 
	},[]);

	const addFilter = (id, checked) => {
		let current = currentFilter; 
		current.map((cat) => {
			let ind = cat.filter.findIndex((obj => obj.id == id)); 
			(ind > -1) && (cat.filter[ind].checked = checked); 
		})
		setCurrentFilter([...current]);
	}

  return (
		<div className="filter p-3">
			{ (currentFilter !== undefined) && currentFilter.map((cat) =>
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
		</div>
  )
}
