import React, { useState } from 'react'
import {FaTh ,FaUserAlt , FaBars} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
const Sidebar = ({children}) => {
  const [isOpen ,setIsOpen] =useState()
  const menuItem =[
    {
        path:"",
        name :'dashboard',
        icon : <FaTh/>
    },
    {
        path:"/product",
        name :'Product',
        icon : <FaUserAlt/>
    }
  ]
  const [upDown ,setUpDown]=useState(true)
  const toggle =(e) =>{
    setUpDown(!upDown)
    let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    
}
  const arrowUpDown= (e) =>{
  console.log(e.target.parentElement);
  var parent =e.target.parentElement.parentElement
    console.log(parent);
   parent.classList.toggle("showMenu")
  // setUpDown(true)
  //  console.log("helllo");


  }

  // style={{width:isOpen?"260px" : "30px"}}

  return (
    <div className='main-div'>
    <div class="sidebar ">
    <div class="logo-details">
    { upDown? <i class='bx bxl-windows' ></i> : <i class='bx bx-menu'  onClick={toggle}></i>}
      <span class="logo_name">{upDown? "Practice sidebar" : ""}</span>
      { upDown?  <i class='bx bx-menu'  onClick={toggle}></i> :"" }
    </div>
    <ul class="nav-links">
      <li>
        <a href="#">
          <i class='bx bx-grid-alt' ></i>
          <span class="link_name"><NavLink to={'/'}>Dashboard</NavLink></span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Category</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <i class='bx bx-collection' ></i>
            <span class="link_name">Category</span>
          </a>
          <i class='bx bxs-chevron-down arrow' onClick={arrowUpDown}></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Category</a></li>
          <li><a href="#">enrollment</a></li>
          <li><a href="#">Insurer</a></li>
          <li><a href="#">motor</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <i class='bx bx-book-alt' ></i>
            <span class="link_name">Policy</span>
          </a>
          <i class='bx bxs-chevron-down arrow' onClick={arrowUpDown} ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Policy</a></li>
          <li><a href="#">Group</a></li>
          <li><a href="#">Individul</a></li>
          <li><a href="#">Motor</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-pie-chart-alt-2' ></i>
          <span class="link_name"><NavLink to={'/product'}>Analytics</NavLink></span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Analytics</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
  <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
  </li>
</ul>
  </div>
  <section class="home-section" onClick={upDown? toggle :"" } style={{ filter:upDown? "blur(2px)" :""}}>
    <div class="home-content">
      <span class="text">Drop Sidebar</span>
    </div>
    <div>{children}</div>
  </section>
  
  </div>
  )
}

export default Sidebar