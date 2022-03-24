import React  from "react";
import Button from "../button/Button";
import './SearchBar.css'; 

function SearchBar() {
  let formInputs = [{id: 1, name:"what", placeholder: "What" }, {id: 2, name: "Where", placeholder: "Where"}]
  return (
    <>
      <section className="search-bar">
        <div className="search-bar-form">
          {formInputs.map((formInput)=> {
            return (
                <>
                    <input key={formInput.id} className="search-bar-input" name={formInput.name} placeholder={formInput.placeholder} />
                </>
            )   
          })}         
        </div>
        <div className="search-bar-btn">
          <Button>
             search
          </Button>
        </div>
      </section>
    </>

  )
}

export default SearchBar; 