import React from 'react'
import axios from 'axios'


function MakeCards(data){

}

function Getb(){
    axios.get("http://localhost:4000/backend/getAllPost")
.then(data => {console.log(data.data);
var r=document.getElementById("root2")
for(var a=0;a<data.data.length;a++){
// r.innerHTML+=data.data[a].content
r.innerHTML+="<br>"}
})
.catch(error => console.log(error));
return " ";
}

export default function Back() {

   
    
  return (
    <div>
    <Getb/>
    </div>
  )
}
