import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const priceList = cartList.map(item => item.price * item.quantity)

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="removeAllBtnContainer">
                  <button
                    type="button"
                    className="removeAllBtn"
                    onClick={onClickRemoveAll}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="cartSummaryContainer">
                  <div className="cartSummaryCard">
                    <h1 className="orderTotal">
                      Order Total:
                      <span className="amount">
                        Rs {priceList.reduce((pre, acc) => pre + acc)}
                      </span>
                    </h1>
                    <p className="itemCount">{cartList.length} items in cart</p>
                    <button type="button" className="checkOutBtn">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
