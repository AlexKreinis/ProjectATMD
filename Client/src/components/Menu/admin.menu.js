import React from 'react';
import '../../css/navbar.css'

export default function AdminMenu(){
    return(
    <div className="dropdown">
     <a class="dropbtn">Menu</a>
        <div className="dropdown-content">
          <a>Products</a>
          <a href='/addWorker'>Workers</a>
          <a href='/addCustomer'>Add Costumers</a>
          <a>Shifts</a>

        </div>
    </div>
    )
}