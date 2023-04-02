import { useEffect, useState } from "react";
import "./css/filter.css"
import FilterDef from "./MockData.js"; 

export default function Filter() {
	const [currentFilter, setCurrentFilter] = useState(FilterDef); 

	useEffect(() => {
		console.log("update"); 
	}, [currentFilter]); 

	const addFilter = (id, checked) => {
		let current = currentFilter; 
		current.map((cat) => {
			let ind = cat.filters.findIndex((obj => obj.id == id)); 
			(ind > -1) && (cat.filters[ind].checked = checked); 
		})
		setCurrentFilter([...current]);
	}

  return (
    <div className="filter p-3">
			{
				currentFilter.map((cat) =>
					<div key={cat.id}>
						<div>
							{cat.descr}
						</div>
						<div>
							{cat.filters.map((item) => (item.checked == true) &&
								<div key={item.id} onClick={() => addFilter(item.id, false)}>
									X {item.descr}
								</div> 
							)}
						</div>
						<div>
							{cat.filters.map((item) => (item.checked == false) &&
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
