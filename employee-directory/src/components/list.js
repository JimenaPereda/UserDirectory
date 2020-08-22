import React from "react";
import "./listitem.css";
import listItem from "./listItem"

function listTable() {

 return (
  <div className="listHeader">
      <div>
          <div>
              <p className="h3">Image</p>
          </div>
          <div>
              <p className="h3">Name</p>
          </div>
          <div>
              <p className="h3">Phone</p>
          </div>
          <div>
              <p className="h3">Email</p>
          </div>
          <div>
              <p className="h3">DOB</p>
          </div>
      </div>
    
  </div>
  )
}

export default listTable;