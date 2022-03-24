import React, { useEffect } from "react";
import './Navbar.css';

function Navbar() {
    useEffect(()=> {

    })
    return (
        <>
          <nav>
            <div className="navbar navbar--sticky">
              <a className="active" href="javascript:void(0)">Logo</a>
              <a href="javascript:void(0)">find Jobs</a>
              <a href="javascript:void(0)">register</a>
              <a href="javascript:void(0)">employer/job posting</a>
            </div>
          </nav>
        </>
    )
}
export default Navbar; 