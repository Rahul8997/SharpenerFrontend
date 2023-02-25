import { lazy, Suspense, useContext} from 'react';
import { cartContext } from '../Store/CartProvider';
import './Cart.css'
const Modal=lazy(()=>import('../UI/Modal'))
const Cart = (props) => {
    const handleClose = () => {
        props.handleToggleCart();
    }
    const cartCtx = useContext(cartContext);
    function countSum(arr){
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum+Number(arr[i].price);
        }
        return sum;
      }

    return (
        <Suspense fallback={<p>Loading...</p>}>
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
                            <button className="btn btn-danger" onClick={async () => {
                                try {
                                    let usermailid = cartCtx.email.replace(/[^a-zA-Z0-9 ]/g, '');
                                    let responce = await fetch(`https://crudcrud.com/api/2ebf37c4371348fe9e414e2868de43ea/cart${usermailid}/${item._id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                    });
                                    if(responce.ok){
                                        try{
                                            let usermailid=cartCtx.email.replace(/[^a-zA-Z0-9 ]/g, '');
                                           let responce = await fetch(`https://crudcrud.com/api/2ebf37c4371348fe9e414e2868de43ea/cart${usermailid}`,{
                                            method: 'GET',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                          } );
                                          let data=await responce.json();
                                          console.log(data);
                                          cartCtx.setCartItems({items:data,totalItems:data.length,totalAmount:countSum(data)})
                                        } catch (e) {
                                            console.log(e);
                                          console.log("Something went wrong");
                                        }
                                    }else{
                                        throw new Error("error");
                                    }
                                } catch (e) {
                                    console.log(e);
                                    console.log("Something went wrong");
                                }
                               
                            }}>REMOVE</button>
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
                    <span className='h3'>Total ${cartCtx.cartItems.totalAmount}</span>
                </h4>
            </div>

            <div className="text-center">
                <button type="button" className="btn btn-info text-light fw-bold btn-lg">PURCHASE</button>
            </div>
        </Modal >
        </Suspense>
    );

};

export default Cart;
