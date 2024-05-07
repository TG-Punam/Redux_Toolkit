import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { remove } from '../store/cartSlice';

function Cart() {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeToCart = (id) => {
        // Dispatch 
        dispatch (remove(id));
        // console.log(product.title, 'Removed from cart');
    }

    const cards = products.map(product => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
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
                    <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

  return (
    <div>
      {cards}
    </div>
  );
}

export default Cart;
