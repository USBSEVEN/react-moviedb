import React from 'react'
import './MyCard.css';

function MyCard(props) {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card border-light" style={{ width: '18rem' }}>
            <img src={props.coverimage} class="card-img-top" alt={props.name} />
            <div class="card-body text-end">
              <h5 class="card-title"> {props.name} </h5>
              <p class="card-text"> {props.detail}</p>
              <h8> Releases Dates : {props.releases}</h8>
                {/* <a href="#" class="btn btn-primary">Watch</a> */}
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default MyCard
