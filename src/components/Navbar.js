import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'

const Navbar = () => {
     
   var token="";

    async function Post(){
        var uname=document.getElementById("un").value
        var pass=document.getElementById("ps").value
        var email=document.getElementById("em").value
        var age=document.getElementById("ag").value

        axios.post('http://localhost:4000/backend_auth/registerUser', {
		"username": uname,
    "password": pass,
    "age":age,
    "email":email
		
	})
	.then(res=> {
		console.log(res.data);
    alert("You are successfully registered");
	})
	.catch(function (error) {
		console.error(error);
    alert("Enter valid details (check for email, username)");
	});
    }

    function check(){
    
      var email=document.getElementById("uname").value
        var pass=document.getElementById("pass").value


      axios.post('http://localhost:4000/backend_auth/login', {
		"email": email,
    "password": pass,
	})
	.then(res=> {
		console.log(res.data);
    token=res.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", email);
    alert("You are successfully Logged in");
    window.location.href="/"
    
	})
	.catch(function (error) {
		console.error(error);
    alert("Enter valid details");
	});
    }
 // console.log("hello",token)
  
  return (
    <>
     

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Gen-Z Blogs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item pad">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to="/">Home</NavLink></a>
        </li>
        <li class="nav-item pad2">
          <a class="nav-link" ><NavLink to="/about">About</NavLink></a>
        </li>

        <li class="nav-item pad2">
          <a class="nav-link" ><NavLink to="/contact">Blog</NavLink></a>
        </li>

        {(sessionStorage.getItem("token")) ?<li class="nav-item pad2">
         <a class="nav-link" ><NavLink to="/account">Account</NavLink></a> 
        </li> : <p></p>}


        {!(sessionStorage.getItem("token")) ? <li class="nav-item pad3" id="login">
          
         <a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><NavLink to="/services">Login</NavLink></a>
        
        

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">LOGIN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form >
          <div class="mb-3">
            <label for="uname" class="col-form-label">Email:</label>
            <input type="text" class="form-control" id="uname"></input>
          </div>
          <div class="mb-3">
            <label for="pass" class="col-form-label">Password:</label>
            <input type="password" class="form-control" id="pass"></input>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign Up</button>
        <button type="button" class="btn btn-primary" onClick={check}>Login</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      <form >
          <div class="mb-3">
            <label for="un" class="col-form-label">Username:</label>
            <input type="text" class="form-control" id="un"></input>
          </div>
          <div class="mb-3">
            <label for="em" class="col-form-label">Email:</label>
            <input type="email" class="form-control" id="em"></input>
          </div>

          <div class="mb-3">
            <label for="ps" class="col-form-label">Password:</label>
            <input type="password" class="form-control" id="ps"></input>
          </div>

          <div class="mb-3">
            <label for="ag" class="col-form-label">Age:</label>
            <input type="number" class="form-control" id="ag"></input>
          </div>



        </form>
     



      </div>
      <div class="modal-footer">

        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-dismiss="modal">Back to Login</button>
        <button type="button" class="btn btn-primary" onClick={Post}>Register</button>
      </div>
    </div>
  </div>
</div>




        </li>:<p></p>}
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
