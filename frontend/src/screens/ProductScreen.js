// ProductScreen.js file

// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
// import products from '../products';
// import axios from 'axios';

const ProductScreen = () => {
  // const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  // const product = products.find((product) => product._id === productId);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productId}`);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [productId]);

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Button
                      className='btn'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart{' '}
                      {product.countInStock > 0 ? <FaCartPlus /> : null}
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
