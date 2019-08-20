import React from 'react'

const Product = (props) => {
  const id = props.match.params.id; 
  return (
    <div className="container section project-details">
      <div className="card z-depth-2">
        <div className="card-content">
          <span className="card-title">Product Name - {id}</span>
          <p>lorem igdesdbfdfblfcuihgyufghfbhh g  fhabvfuabbjfbyvgh fshvyufvrbfkbsubfs ybfh sfbhbuybfb
            bfsbhfshbdfhbsfyushebfhsbhdfbhsvh cs vfhshvdhfs hdfvshdhbfksjfs sdvfhsbfkjkvhsf 
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted BY Shide</div>
          <div>19 August, 2019</div>
        </div>
      </div>
      
    </div>
  )
}

export default Product
