import React from "react";
import { Link } from "react-router-dom";

export default ({ products }) => {
  return (
    <ul class="menu-list">
      {products.map(product => (
        <li class="has-background-grey-lighter" key={product.id}>
          <Link
            to={{
              pathname: `/pdp/${product.id}`,
              state: { productData: product }
            }}
          >
            <div>
              <span class="tag is-info"> Name: </span>
              <span class="tag is-light">{product.name.toUpperCase()}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// <div>
// <span class="tag is-info"> Price:</span>
// <LoginContext.Consumer>
//   {context =>
//     context.isAuthenticated ? (
//       <span class="tag is-light">
//         {product.discountedPrice} $
//       </span>
//     ) : (
//       <span class="tag is-light">{product.price} $</span>
//     )
//   }
// </LoginContext.Consumer>
// </div>