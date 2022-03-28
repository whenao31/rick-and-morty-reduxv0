import React from 'react'

const CardView = ({ character1 }) => {

    return (
        <div className='col-md-4 mb-1'>
            <div className="card">
                <img src={character1.image} alt={`image-${character1.name}`} className='card-img-top'/>
                <div className='card-body'>
                    <h5>{character1.name}</h5>
                    <p>{character1.species}</p>
                </div>
            </div>
        </div>
  )
}

export default CardView;