import React, {useState, useEffect} from "react";
import SearchBar from "material-ui-search-bar";
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
      {/* <form onSubmit={handleSubmit}>
        <div className="form-controls">
          <label>Search</label>
          <input value={state.title} onChange={searchChange} id="videoSearch" type="text" placeholder="What are your interests?" style={{
        margin: '0 auto',
        maxWidth: 800
      }}/>
          <button>Submit</button>
        </div>
      </form> */}

      {/* code for MUI search bar */}
      <SearchBar
        value={state.title} onChange={searchChange} id="videoSearch" type="text" placeholder="What are your interests?"
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
      />
    </div>
  )
}