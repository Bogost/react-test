import './App.css';
import React from 'react';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {quantity: 2, shipping: 23.8, subtotal: 23.8, total: 47.6, cart: 'visible', product: 'visible'}
  }

  decrement() {
    if(this.state.quantity > 0)
    {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  increment() {
    this.setState({quantity: this.state.quantity + 1})
  }

  actualizeShipping() {
    if(this.state.subtotal > 100)
    {
      this.setState({shipping: 0}, () => {
        this.setState({total: this.state.subtotal + this.state.shipping})
      })
    }
    else
    {
      this.setState({shipping: 23.8}, () => {
        this.setState({total: this.state.subtotal + this.state.shipping})
      })
    }
  }

  actualize() {
    this.setState({subtotal: this.state.quantity * 11.9}, () => this.actualizeShipping())
  }

  proceed() {
    this.setState({cart: 'hidden'})
    alert('Your order has been submitted successfully')
  }

  xclick() {
    this.setState({product: 'hidden'})
    this.setState({quantity: 0})
    this.actualizeShipping()
    this.actualize()
  }

  render() {
    return(
        <div id="overbody">
          <div id="line-1">
              <div id="header">Shopping Cart</div>
              <button id="checkout-1" onClick={()=>this.proceed()}>Proceed to checkout</button>
          </div>
          <div id="body">
              <div id="left">
                  <div id="cart" style={{visibility: this.state.cart}}>
                      <table id="products">
                          <thead>
                              <tr>
                                  <th></th>
                                  <th></th>
                                  <th>Product Name</th>
                                  <th>Unit Price</th>
                                  <th>Qty</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr style={{visibility: this.state.product}}>
                                  <td>
                                      <button id="x" onClick={() => this.xclick()}><img src="images/x-img.png"/></button>
                                  </td>
                                  <td>
                                      <img src="images/headphones.png"/>
                                  </td>
                                  <td>
                                      Headphnes
                                  </td>
                                  <td class="price">
                                      $11.90
                                  </td>
                                  <td>
                                      <div class="flex">
                                          <button id="minus" class="counter" onClick={() => this.decrement()}>-</button>
                                          <div id="field" class="counter">{this.state.quantity}</div>
                                          <button id="plus" class="counter" onClick={() => this.increment()}>+</button>
                                          <button id="edit" onClick={() => this.actualize()}><img src="images/edit-img.png"/></button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot>
                              <tr>
                                  <td colspan="4"></td>
                                  <td>
                                      <button id="cart-update" onClick={() => this.actualize()}>Update Shopping Cart</button>
                                  </td>
                              </tr>
                          </tfoot>
                      </table>
                  </div>
              </div>
              <div id="right">
                  <div id="shipping-container">
                      <div id="shipping">SHIPPING</div>
    <div id="total">${this.state.shipping.toFixed(2)}</div>
                  </div>
                  <div id="totals">
                      <div id="cart-totals">
                          CART TOTALS
                      </div>
                      <div id="totals-main">
                          <div id="calculation">
                              <div id="subtotal-line">
                                  <div id="subtotal-text">
                                      Subtotal
                                  </div>
                                  <div id="subtotal-number">
                                  ${this.state.subtotal.toFixed(2)}
                                  </div>
                              </div>
                              <hr></hr>
                              <div id="grandtotal-line">
                                  <div id="grandtotal-text">
                                      Grand Total
                                  </div>
                                  <div id="grandtotal-number">
                                  ${this.state.total.toFixed(2)}
                                  </div>
                              </div>
                          </div>
                          <button id="checkout-2" onClick={()=>this.proceed()}>Proceed to checkout</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
