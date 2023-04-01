import "./css/filter.css"
import FilterDef from "./MockData.js"; 

export default function Filter() {
  return (<>
    <div className="filter p-3">
      { console.clear(), console.table(FilterDef)  }
    </div>
  </>  )
}