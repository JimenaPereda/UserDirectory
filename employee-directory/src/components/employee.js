import React, { useState, useEffect } from 'react'
import api from '../utils/api.js';
import Item from "./listItem";
import SearcHeader from "./header.js"
import List from "./list.js"

function Employees(){
    const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(
 () => {
  api.getEmployees().then(function (result){
    console.log(result.data.results)
    setEmployees(result.data.results)
    
  }).catch(err => setError(err))
 },
 []

)

function inputText (){
  console.log(inputText)
}


const employeeList = employees.map(employee => 
    <Item employee={employee}/>
)
    return (
       <div>
        <SearcHeader inputText={inputText}></SearcHeader>,
        <List></List>,
        {employeeList}
      </div>
     )
}

export default Employees;