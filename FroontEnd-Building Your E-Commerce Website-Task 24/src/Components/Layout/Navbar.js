import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { cartContext } from '../Store/CartProvider';

const Navbar = (props) => {
    let cartCtx=useContext(cartContext);
    const handleOpenCart = async () => {
        props.handleToggleCart();
            try{
                let usermailid=cartCtx.email.replace(/[^a-zA-Z0-9 ]/g, '');
               let responce = await fetch(`https://crudcrud.com/api/ee9c163cdc0c4f8a8e27612ed0b8ddfe/cart${usermailid}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
              } );
              let data=await responce.json();
              console.log(data);
              cartCtx.setCartItems({items:data,totalItems:0,totalAmount:0})
            } catch (e) {
              console.log("Something went wrong");
            }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/store">Store</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page"  to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button type="button" className="btn btn-dark border-primary" onClick={handleOpenCart}>Cart</button>
                            <span style={{color:"cyan",fontSize:"20px",margin:"-15px 0px"}}>{cartCtx.cartItems.totalItems}</span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
