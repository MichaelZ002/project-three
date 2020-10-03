import React, {useState, useEffect} from "react";
import Search from "../youtube/search";

export default (props) => {
  const [state, setState] = useState({title: ""})
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(state.title)
  }

  // update the state with every character the user types in the search
  const searchChange = (e) => {
    const searchWords = e.target.value
    console.log(searchWords)
    setState({title: searchWords})
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-controls">
          <label>Search</label>
          <input value={state.title} onChange={searchChange} id="videoSearch" type="text" placeholder="What are your interests?" />
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}