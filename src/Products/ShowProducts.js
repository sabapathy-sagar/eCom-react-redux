import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

export class ShowProducts extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul className="menu-list">
        {this.props.products.map(product => (
          <li className="has-background-grey-lighter" key={product.id}>
          <Link
            to={{
              pathname: `/pdp/${product.id}`,
              state: { productData: product }
            }}
          >
            <div>
              <span className="tag is-info"> Name: </span>
              <span className="tag is-light">{product.name.toUpperCase()}</span>
            </div>
            <div>
            <span className="tag is-info"> Price:</span>
              {this.props.isAuthenticated ? (
                      <span className="tag is-light">
                        {product.discountedPrice} $
                      </span>
                    ) : (
                      <span className="tag is-light">{product.price} $</span>
                    )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(ShowProducts);
