
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductGrid from './components/ProductGrid';
import CartTable from './components/CartTable';
import { fetchProducts } from './state/product/actions';
import{ fetchCart } from './state/cart/actions';


class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  checkAvailability = (product) => {
    // alert("The Product is not available currently");
  }

  render() {
    const {
      isProductsLoading,
      products,
      cart,
    } = this.props;

    if(isProductsLoading) {
      return <h2>Loading...</h2>;
    }

    console.log('cart', cart);
    return (
      <div>
        <h1>Fancy-cars application</h1>
        <ProductGrid
          products={products}
        />
      </div>
    );
  }
}

/**
 * `mapStateToProps` is a helper function to map our state to `props` and
    to only expose the state needed. take the current state which is: 
    `this.props.store.getState().cart`and put it in this component props: `this.props.cart`. 
    If we have multiple pieces of our state
 * we can choose here which parts of the state should be exposed to this component */


const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
  cart: state.cart.cart,
});
/**
 * `mapDispatchToProps` is in charge of converting `store.dispatch` into
 * more easily handled functions. 'ProductGrid' component supplies us with
 * the store via `this.props.store`. This is so we can write 'this.props.addToCart'
 * is what we are actually saying */

const mapDispatchToProps = {
  fetchProducts,
  fetchCart,
};
/**
 * `connect` is used to pass along the 2 helper functions
 * `mapStateToProps` and `mapDispatchToProps` to init the connection.
 * Our "third" argument is the component to connect. So notice the double ()()
 * This is a Higher Order Component at work. It takes default values and a Component
 * as parameter and then it returns a new enhanced Component when we import the Component
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);