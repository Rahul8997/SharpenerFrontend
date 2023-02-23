import React from 'react'
import { Link } from 'react-router-dom';

const products = [
    {
        productId: 'p1',
        title: 'Black T-shirt',
        image1: 'https://rukminim1.flixcart.com/image/832/832/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70',
        image2: 'https://rukminim1.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70',
        image3: 'https://rukminim1.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zvaxuzcsg.jpeg?q=70',
        image4: 'https://rukminim1.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70',
        rating: 4.5,
        reviews: 13425
    },
    {
        productId: 'p2',
        title: 'White T-shirt',
        image1: 'https://rukminim1.flixcart.com/image/832/832/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70',
        image2: 'https://rukminim1.flixcart.com/image/832/832/kkyc9zk0/t-shirt/n/z/d/m-t344hs-whsb-new-eyebogler-original-imagy6hgszhukr4h.jpeg?q=70',
        image3: 'https://rukminim1.flixcart.com/image/832/832/kkyc9zk0/t-shirt/k/j/2/m-t344hs-whsb-new-eyebogler-original-imagy6hg25ufyxbn.jpeg?q=70',
        image4: 'https://rukminim1.flixcart.com/image/832/832/kkyc9zk0/t-shirt/k/j/2/m-t344hs-whsb-new-eyebogler-original-imagy6hg25ufyxbn.jpeg?q=70',
        rating: 5,
        reviews: 1342
    },
    {
        productId: 'p3',
        title: 'Red T-shirt',
        image1: 'https://rukminim1.flixcart.com/image/832/832/l3nco7k0/t-shirt/d/c/a/s-1jgrf-011-resp-red-jugular-original-imagepzdw3yzcwxf.jpeg?q=70',
        image2: 'https://rukminim1.flixcart.com/image/832/832/l3nco7k0/t-shirt/d/c/a/s-1jgrf-011-resp-red-jugular-original-imagepzdw3yzcwxf.jpeg?q=70',
        image3: 'https://rukminim1.flixcart.com/image/832/832/l3nco7k0/t-shirt/d/c/a/s-1jgrf-011-resp-red-jugular-original-imagepzdw3yzcwxf.jpeg?q=70',
        image4: 'https://rukminim1.flixcart.com/image/832/832/l3nco7k0/t-shirt/d/c/a/s-1jgrf-011-resp-red-jugular-original-imagepzdw3yzcwxf.jpeg?q=70',
        rating: 3.5,
        reviews: 134255
    },
    {
        productId: 'p4',
        title: 'Cyan T-shirt',
        image1: 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/n/t/y/40-15000-man-chester-original-imagew3zdtmuxzmk.jpeg?q=70',
        image2: 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/n/t/y/40-15000-man-chester-original-imagew3zdtmuxzmk.jpeg?q=70',
        image3: 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/n/t/y/40-15000-man-chester-original-imagew3zdtmuxzmk.jpeg?q=70',
        image4: 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/shirt/n/t/y/40-15000-man-chester-original-imagew3zdtmuxzmk.jpeg?q=70',
        rating: 2.5,
        reviews: 1342542
    }
]
const Product = () => {
    return (
        <>
            <h1 className='text-center'>Products</h1>
            {products.map((prod) => {
                return <div className="container d-flex justify-content-center">
                    <div className='text-center'>
                        <h2>{prod.title}</h2>
                    </div>
                    <Link to={`products/${prod.productId}`}>  <img src={prod.image1} className="my-3 mx-3" alt=".." style={{ height: "300px", width: "300px" }}></img></Link>
                </div>
            })}
        </>
    )
}

export default Product


