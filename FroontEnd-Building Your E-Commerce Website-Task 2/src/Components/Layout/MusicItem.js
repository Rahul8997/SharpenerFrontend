import React from 'react'

const MusicItem = (props) => {
    return (
        <div className="card my-3 mx-3 border-0">
            <div>
                <h4 className="text-center">{props.title}</h4>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-title">${props.price}</span>
                    <button type="button" class="btn btn-info text-light fw-bold">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default MusicItem
