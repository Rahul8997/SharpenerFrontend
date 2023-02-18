import React from 'react'

const MusicItem = (props) => {
    return (
        <div>
            <div className="card my-3 mx-3 border-0" style={{ width: "18rem" }}>
                <h4 className="text-center">{props.title}</h4>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">${props.price}</h5>
                    <button type="button" class="btn btn-info">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default MusicItem
