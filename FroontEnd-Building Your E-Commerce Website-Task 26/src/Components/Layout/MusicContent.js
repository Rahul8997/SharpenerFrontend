import React, { lazy, Suspense } from 'react'
const MusicItem=lazy(()=>import('./MusicItem'))
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
const MusicContent = (props) => {
    const handleCartSeen=()=>{
        props.handleToggleCart();
    }
    return (
        <div>
            <h1 className='text-center'>MUSIC</h1>
            <div className='container'>
            <div className='row my-2'>
                {productsArr.map((item) => {
                    return <div key={item.title} className='col-md-3 my-3'><Suspense fallback={<p>Loading...</p>}><MusicItem title={item.title} price={item.price} imageUrl={item.imageUrl} product={item}/></Suspense></div>
                })}
            </div>
            </div>
            <div className='text-center'>
                <button type="button" className="btn btn-secondary my-3 text-info btn-lg" onClick={handleCartSeen}>See the Cart</button>
            </div>
        </div>
    )
}

export default MusicContent
