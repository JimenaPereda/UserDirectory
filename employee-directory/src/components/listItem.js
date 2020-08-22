import React from "react";


function listItem (props){
    console.log(props)
    const employee = props.employee

    return (
       <div className = "listItem"  >
           <tr key ={employee.login.uuid}>
            <td className="employeePic"><img src={employee.picture.large}></img></td>
            <td className="employeeName"><p>{employee.name.first} {employee.name.last}</p></td>
            <td className="employeeLogin"><p>{employee.login.employeename}</p></td>
        </tr>
        </div>
      
        
        );
}

export default listItem;


  
