// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../store/cartSlice';
// import { getProducts } from '../store/productSlice';

// function Product() {
//     // const [products, getProducts] = useState([]);
//     const dispatch = useDispatch();
//     const {data: products} = useSelector(state => state.products);

//     // useEffect(() => {
//     //     fetch('https://fakestoreapi.com/products')
//     //         .then(data => data.json())
//     //         .then(result => getProducts(result))
//     // }, []);

//     useEffect(() => {
//         // Dispatch an action for fetchProducts
//         dispatch(getProducts());
//     }, []);

//     const addToCart = (product) => {
//         // Dispatch a add action
//         dispatch(add(product));
//     }

//     const cards = products.map(product => (
//         <div className="col-md-3" style={{ marginBottom: '10px' }}>
//             <Card style={{ width: '18rem' }} className='h-100'>
//                 <div className='text-center'>
//                     <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
//                 </div>
//                 <Card.Body>
//                     <Card.Title>{product.title}</Card.Title>
//                     <Card.Text>
//                         INR: {product.price}
//                     </Card.Text>
//                 </Card.Body>
//                 <Card.Footer style={{ background: 'white' }}>
//                     <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
//                 </Card.Footer>
//             </Card>
//         </div>
//     ))

//     return (
//         <div>
//             <p>Product Dashboard</p>
//             <div className="row">
//                 {cards}
//             </div>
//         </div>
//     );
// }

// export default Product;











// Product.js
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';

function Product() {
  const dispatch = useDispatch();
  const { data: products, status, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
    console.log(product.title,'Added to cart');
  }

  if (status === StatusCode.LOADING) {
    return <Alert key='primary' variant='primary'>Loading...</Alert>
  }

  if (status === StatusCode.ERROR) {
    console.log('Error:', error);
    return <Alert key='danger' variant='danger'>Something went wrong! Please try again later...</Alert>
  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: '10px' }} key={product.id}>
      <Card style={{ width: '18rem' }} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <p>Product Dashboard</p>
      <div className="row">
        {cards}
      </div>
    </div>
  );
}

export default Product;
