import React from 'react'
import MusicItem from './MusicItem'

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]
const MusicContent = () => {
    return (
        <div>
            <h1 className='text-center'>Music</h1>
                <div className='d-flex justify-content-center'>
                    {productsArr.map((item) => {
                        return <MusicItem title={item.title} price={item.price} imageUrl={item.imageUrl} />
                    })}
            </div>
            <div className='text-center'>
                <button type="button" class="btn btn-secondary my-3">See the Cart</button>
            </div>
        </div>
    )
}

export default MusicContent
