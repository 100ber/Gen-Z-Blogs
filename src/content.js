import React from 'react'

export default function Content() {
  return (
    <div align="center">
      

      <div id="carouselExampleIndicators" class="wid carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="genz2.jpg" class="d-block w-100 blog-pic" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="genz3.jpg" class="d-block w-100 blog-pic" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

