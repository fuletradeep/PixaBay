import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import List from "./List";



function Search() {
    const [text, setText] = useState("");
    const [value, setValue] = useState({});
    
    const handler = async (e) => {
       setText(e.target.value);
        const res = await axios
          .get(
            `https://pixabay.com/api/?key=18671834-def0bc956fb57f2ee016f83c9&q=${text}&image_type=photo`
          )
        let data = await res;
        console.log(data);
        setValue(data)
        
          
    };

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="Enter text ... "
            value={text}
            onChange={handler}
          />
        </div>
      </div>
      {Object.keys(value).length>0 ? <List value={value} /> : null }
      
    </>
  );
}

export default Search;
