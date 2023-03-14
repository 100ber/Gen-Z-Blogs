import React from "react"

export default function Card(props) {
    return (
        // <div className="col-3 bc" align="center">
        //     <img src={`${props.img}`} className="Bi" />
        //     <h4 >Title</h4>
        //     {/* <div className="card--stats">
        //         <img src="../images/star.png" className="card--star" />
        //         <span>{props.rating}</span>
        //         <span className="gray">({props.reviewCount}) • </span>
        //         <span className="gray">{props.location}</span>
        //     </div> */}
        //     <div> By ME</div>
        //     <div id="collapseExample">
        //         <div className="row">
        //             <div className="col-6">
        //                 <button className="btn btn-danger delbut">Delete</button>
        //             </div>
        //             <div className="col-6">
        //                 <button className="btn btn-primary editbut">Edit</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>


<>
        <div class="card text-bg-dark mb-3">
  <div class="row g-0 crd">
    <div class="col-md-3">
      <img src={props.img} class="img-fluid rounded-start cimg" alt="thumbnail"/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h3 class="card-title">{props.title}</h3>
        <p class="card-text">{props.content}</p>
        
        <p class="card-text"><small class="text-muted">Posted by {props.author}</small></p>
      </div>
    </div>
    <div class="col-md-2">
        <button className="btn btn-danger delbut" value={props.value}>Delete</button>
        &nbsp;
        <button className="btn btn-primary editbut" value={props.value}>Edit</button>
    </div>
  </div>
</div>
<br></br>
</>
    )
}