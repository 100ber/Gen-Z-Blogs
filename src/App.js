import React,{useEffect,useState} from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Content from "./content";
import Back from "./back";
import axios from 'axios'
import Card from "./card";

const Home = () => {
  return (
    <>
    <Content></Content>
    </>
  );
};

const About = () => {
  return (
    <>
     <h1 align="center" class="abt">ABOUT US</h1>
     <br></br>
     <h3 align="center" class="abt2"><b>Gen-Z Blogs</b> is a travel blog website where people can share their travel experiences, pictures and queries.<br/><br/> People can read blogs that are posted on the site and comment their views and queries in the comment section. <br/> <br/>Users have to register on our site to avail posting authorization. Users can comment anonymously but can't post a blog without signing in. Users can also edit their posted blogs.<br/>
     <br/>Users can insert text, images and videos. Users have to provide media link to insert media into their blog.<br/>You can connect with us on our socials and share your feedback and queries. Happy Sharing!</h3>
    
    </>
  );
};

const Service = () => {
  return (
    <>
      
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

function Bt(a){
  axios.get("dbutton.txt")
  .then(data => {a.innerHTML+=data.data})
}


var a;


function Load(){

  const token=sessionStorage.getItem("token");
  var user=sessionStorage.getItem("user");
  axios.get("http://localhost:4000/backend_auth/getAllData",{headers:{"auth-token":token}})
  .then(data => {//console.log(data.data);
  var r=document.getElementById("root3")
r.innerHTML=""
var cn=0;
var len=data.data.length;
var task=len/3;
if(len%3!=0){
  task=(len/3)-1;
}
  for(var l=0;l < task;l++){
    cn=l+1;
    var rr=document.createElement("div");
    rr.className='row br';
    rr.align="center";

    for(var i=l*3;i<l*3+3;i++){
      var a=document.createElement("div");
      a.className='col-3 bc';
      a.align="center";
     // console.log(l," ",i)
      var im=document.createElement("img");
      im.src=data.data[i].img;
      im.className='Bi';
      a.appendChild(im);
      var t=document.createElement("h4");
      t.innerHTML=data.data[i].title;
      a.appendChild(t);
      var b=document.createElement("div");
      // b.innerHTML="Posted on: ";
      b.innerHTML=data.data[i].content;
      var c=document.createElement("div");
      c.className="hig"
      c.innerHTML="By ";
      c.innerHTML+=data.data[i].author;
      a.appendChild(b);
      a.appendChild(c);
     //Bt(a)
     
     if(user==="saurabh209@gmail.com"){ var cc=document.createElement("div");
     //cc.className='collapse';
      cc.id="collapseExample";
      var cr=document.createElement("div");
      cr.className='row'
      var ccol=document.createElement("div");
      ccol.className='col-6'
      var cb=document.createElement("button");
      cb.className='btn btn-danger delbut'
      cb.innerHTML="Delete"
      cb.value=data.data[i]._id;
      ccol.appendChild(cb);
      var ccol2=document.createElement("div");
      ccol2.className='col-6'
      var cb2=document.createElement("button");
      cb2.className='btn btn-primary editbut'
      cb2.innerHTML="Edit"
      cb2.value=data.data[i]._id;
      ccol2.appendChild(cb2)
      cr.appendChild(ccol)
      cr.appendChild(ccol2)
      cc.appendChild(cr)
     a.appendChild(cc)}
      rr.appendChild(a);
      }


r.appendChild(rr);

    }
    if(len%3!=0){
      //console.log("here")
      var rr=document.createElement("div");
    rr.className='row br';
    rr.align="center";
for(var i=cn*3;i<cn*3+(len%3);i++){
      var a=document.createElement("div");
      a.className='col-3 bc';
      a.align="center";
      var im=document.createElement("img");
      im.src=data.data[i].img;
      im.className='Bi';
      a.appendChild(im);
      var t=document.createElement("h4");
      t.innerHTML=data.data[i].title;
      a.appendChild(t);
      var b=document.createElement("div");
      // b.innerHTML="Posted on: ";
      b.innerHTML=data.data[i].content;
      var c=document.createElement("div");
      c.className="hig"
      c.innerHTML="By ";
      c.innerHTML+=data.data[i].author;
      a.appendChild(b);
      a.appendChild(c);
      if(user==="saurabh209@gmail.com"){
      var cc=document.createElement("div");
      //cc.className='collapse';
       cc.id="collapseExample";
       var cr=document.createElement("div");
       cr.className='row'
       var ccol=document.createElement("div");
       ccol.className='col-6'
       var cb=document.createElement("button");
       cb.className='btn btn-danger delbut'
       cb.innerHTML="Delete"
       cb.value=data.data[i]._id;
       ccol.appendChild(cb);
       var ccol2=document.createElement("div");
       ccol2.className='col-6'
       var cb2=document.createElement("button");
       cb2.className='btn btn-primary editbut'
       cb2.innerHTML="Edit"
       cb2.value=data.data[i]._id;
       ccol2.appendChild(cb2)
       cr.appendChild(ccol)
       cr.appendChild(ccol2)
       cc.appendChild(cr)
      a.appendChild(cc)}
      rr.appendChild(a);
      }

      r.appendChild(rr);

    }
  })
  .catch(error => console.log(error));
  return " ";
}



function create(){

  var title=document.getElementById("title").value
  var content=document.getElementById("cont").value
  var img=document.getElementById("im").value
        
  const token=sessionStorage.getItem("token");

        axios.post('http://localhost:4000/backend_auth/createPost', {
		"title": title,
    "content": content,
    "img":img
		
	},{headers:{"auth-token":token}})
	.then(res=> {
		console.log(res.data);
    alert("Posted Successfully");
    window.location.href="/contact"
	}) 
	.catch(function (error) {
		console.error(error);
    alert("Unable to Post");
	});

}

// const edit= event=()=>{
//   const token=sessionStorage.getItem("token");

//   var title=document.getElementById("title").value
//   var content=document.getElementById("cont").value
//   var img=document.getElementById("im").value
  
//       var url="http://localhost:4000/backend_auth/editPost/";
//   url+=event.srcElement.value;
//   console.log(url)
//   axios.delete(url,{headers:{"auth-token":token}})
//   .then(data => {alert("Your post is deleted")})
//   .catch(error => alert("You don't have rights to delete this")); 
// }



const Account = () =>{

  const token=sessionStorage.getItem("token");
const [ad, setad] = useState([])
useEffect(() => {
axios.get("http://localhost:4000/backend_auth/getMyPosts",{headers:{"auth-token":token}}).then((res)=>{setad(res.data);})
.catch(error => console.log(error))
},[]);


const cards = ad.map(item => {
  return (
      <Card
          img={item.img}
          content={item.content}
          author={item.author}
          value={item._id}
          title={item.title}
          
      />
  )
})

const rel=()=>{
  sessionStorage.setItem("token","");
  window.location.href="/"
}

var a=sessionStorage.getItem("user")
  return (

    <>


<div class="modal fade" id="eM3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Edit Blog</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      <form >
          <div class="mb-3">
            <label for="etitle" class="col-form-label">Post Title:</label>
            <input type="text" class="form-control" id="etitle"></input>
          </div>
          <div class="mb-3">
            <label for="econt" class="col-form-label">Post Content:</label>
            <input type="text" class="form-control" id="econt"></input>
          </div>

          <div class="mb-3">
            <label for="im" class="col-form-label">Post Image Url</label>
            <input type="etext" class="form-control" id="eim"></input>
          </div>



        </form>
     



      </div>
      <div class="modal-footer">

        <button class="btn btn-danger"  data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="ep">Edit Post</button>
      </div>
    </div>
  </div>
</div>


<br>
    </br>
    <h2 align="center">{a}</h2>
    <h1 align="center">-------------------------------------------------------------------------</h1>
    <br/>

    
    <h1 align="center">My Posts</h1>
    <br></br>
    {/* <Card img="https://i.cbc.ca/1.4095764.1493748141!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/hotel-california.jpg"></Card> */}
    {/* <Load2/> */}
    {cards}

    <br>
    </br>
    <h1 align="center">-------------------------------------------------------------------------</h1>
    <br/>
    
    <div align="center">
    <button className="btn btn-danger" onClick={rel}>Log Out</button></div>
    </>
  )
}

const Contact = () => {
  if(sessionStorage.getItem("token")){
  return (
    <>
    <div id="root2">
  <h1 class="abt" align="center">BLOGS</h1>
<div align="right">
  <button class="btn btn-danger pb" type="button" data-bs-target="#eM2" data-bs-toggle="modal">Post Blog +</button>
</div>

<div class="modal fade" id="eM2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Post Blog</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      <form >
          <div class="mb-3">
            <label for="title" class="col-form-label">Post Title:</label>
            <input type="text" class="form-control" id="title"></input>
          </div>
          <div class="mb-3">
            <label for="cont" class="col-form-label">Post Content:</label>
            <input type="text" class="form-control" id="cont"></input>
          </div>

          <div class="mb-3">
            <label for="im" class="col-form-label">Post Image Url</label>
            <input type="text" class="form-control" id="im"></input>
          </div>



        </form>
     



      </div>
      <div class="modal-footer">

        <button class="btn btn-danger"  data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={create}>Post</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="eM3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Edit Blog</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      <form >
          <div class="mb-3">
            <label for="etitle" class="col-form-label">Post Title:</label>
            <input type="text" class="form-control" id="etitle"></input>
          </div>
          <div class="mb-3">
            <label for="econt" class="col-form-label">Post Content:</label>
            <input type="text" class="form-control" id="econt"></input>
          </div>

          <div class="mb-3">
            <label for="im" class="col-form-label">Post Image Url</label>
            <input type="etext" class="form-control" id="eim"></input>
          </div>



        </form>
     



      </div>
      <div class="modal-footer">

        <button class="btn btn-danger"  data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="ep">Edit Post</button>
      </div>
    </div>
  </div>
</div>

<br></br>
<div id="root3">
  <Load></Load>
</div>

</div>



    </>
  );}
  else{
    alert("login to access blogs")
    window.location.href="/"
    return(
      <Home/>
      
    )
  }
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/account">
        <Account />
      </Route>
    </Switch>
  );
};

export default App;
