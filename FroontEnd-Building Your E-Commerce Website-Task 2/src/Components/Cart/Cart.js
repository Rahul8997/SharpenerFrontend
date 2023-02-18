import Modal from '../UI/Modal';
import './Cart.css'
const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]
const Cart = (props) => {
    const handleClose = () => {
        props.handleToggleCart();
    }
    return (
        <Modal>
            <div>
                <button className="btn btn-outline-secondary float-end" onClick={handleClose}>X</button></div>
            <h1 className='text-center'>Cart</h1>
            <div className='d-flex justify-content-between'>
                <h2>Item</h2><h2>Price</h2><h2>Quantity</h2>
            </div>
            <hr />

            {cartElements.map((item) => {
                return <div>
                    <div className='d-flex justify-content-between'>
                    <div className='cart-item'>
                        <img src={item.imageUrl} alt="" />
                        <h4>{item.title}</h4>
                    </div>
                    <div className='cart-item'>
                        <h4>${item.price}</h4>
                    </div>
                    <div className='cart-item'>
                        <input type="tel" name="qty" id="qty" />
                        <button className="btn btn-danger">REMOVE</button>
                    </div>
                    </div>
                    <hr />
                </div>
            })
            }
            <h3>Total $12</h3>
            <div className="text-center">

            <button type="button" class="btn btn-info text-light fw-bold btn-lg">PURCHASE</button>
            </div>
        </Modal >
    );
};

export default Cart;
