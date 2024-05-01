import {useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Product = () => {

      
     const [products, getProducts]=useState([]);

     useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data =>data.json())
        .then(result =>getProducts(result))
     }, []);

    //  const addToCart =(product)=>{
    //           //dispatch an add action
    //   dispatch(add(product))
    //       }

     const cards =products.map(product=>{
        <div classNameName='col-md-3' style={{marginBottom:"10px"}}>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        </div>
     })

  return (
    <>
    
    <div className="container-fluid page-header mb-1 wow fadeIn" data-wow-delay="0.2s">
        <div className="container">
            <h1 className="display-3 mb-2 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>
    <h1>Product</h1>
    <div classNameName='row'>
       {cards}
    </div>
   
    </>
  )
}

export default Product