import React from "react";
import { useState } from "react";
import { FaSistrix,FaTimes,FaRegWindowClose,FaRegTimesCircle } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";
import data from "../Data.json";
const Trends = () => {





  // const [value, setValue] = useState("");
  // const onChange = (event) => {
  //   setValue(event.target.value);
  //   console.log(event.target.value);

  // }
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      
    }
  };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };





  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          // value={value}
          placeholder="Search Your Teammate"
          onChange={handleFilter}
        />
        <div className="trend__icon">
          <button className="searchbtn"><FaSistrix className="search" /></button>

        </div>
      </div>
        { filteredData.length!==0 &&(<div className="dataResult">
          {filteredData.slice(0,10).map((value,key)=>{
            return(
              <a className="dataItem" href={value.link} target="_blank">
              <p>{value.title}</p>
              </a>
            )
          })}
        </div>)
          

        }
        
      
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
