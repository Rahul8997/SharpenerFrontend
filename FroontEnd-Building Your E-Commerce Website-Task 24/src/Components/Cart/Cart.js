import { useContext } from 'react';
import { cartContext } from '../Store/CartProvider';
import Modal from '../UI/Modal';
import './Cart.css'
const Cart = (props) => {
    const handleClose = () => {
        props.handleToggleCart();
    }
    const cartCtx = useContext(cartContext);
    return (
        <Modal>
            <div>
                <button className="btn btn-outline-secondary float-end" onClick={handleClose}>X</button></div>
            <h1 className='text-center'>Cart</h1>
            <div className="row align-items-start">
                <h4 className="col">
                    ITEM
                </h4>
                <h4 className="col">
                    PRICE
                </h4>
                <h4 className="col">
                    QUANTITY
                </h4>
            </div>
            <hr />

            {cartCtx.cartItems.items.map((item) => {
                return <div key={item.title}>
                    <div className='row align-items-start'>
                        <div className='col'>
                            <img src={item.imageUrl} alt="" />
                            <h6>{item.title}</h6>
                        </div>
                        <div className='col'>
                            <h5>${item.price}</h5>
                        </div>
                        <div className='col'>
                            <input type="tel" name="qty" id="qty" />
                            <button className="btn btn-danger">REMOVE</button>
                        </div>
                    </div>
                    <hr />
                </div>
            })
            }
            <div className="row align-items-start">
                <h4 className="col">
                </h4>
                <h4 className="col">
                </h4>
                <h4 className="col">
                    <h3>Total ${cartCtx.cartItems.totalAmount}</h3>
                </h4>
            </div>

            <div className="text-center">
                <button type="button" className="btn btn-info text-light fw-bold btn-lg">PURCHASE</button>
            </div>
        </Modal >
    );
};

export default Cart;
