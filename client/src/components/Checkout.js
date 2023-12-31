import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import "./css/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const ref = React.createRef();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* <FlipMove> */}
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                // ref={ref}
              />
            ))}
          {/* </FlipMove> */}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;