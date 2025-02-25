import React, { useState } from "react";
import "./Products.css";
import { phonesData } from "./Product.data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const [items, setItems] = useState(phonesData);

  const decQtry = (id) => {
    setItems(items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const incQty = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const getStockStatus = (qty) => {
    if (qty === 0) return "Out of Stock";
    if (qty <= 5) return "Limited Stock";
    return "In Stock";
  };

  return (
    <>
      <div className="header shadow">
        <h1>Cosmetic Wholesale</h1>
      </div>
      <main>
        <div className="mainContainer">
          {items.map((item) => (
            <Card className="product-card" key={item.id}>
              <Card.Img
                variant="top"
                className="phone-img"
                src={require(`${item.image}`)}
              />
              <Card.Body className="card-body-custom">
                <div className="model-Container">
                  <Card.Title className="mb-2">{item.model}</Card.Title>
                </div>

                <div className="disc-container">
                  <Card.Text>{item.desc}</Card.Text>
                </div>

                <h5 className="price">
                  Price: <span>RS.{item.price}</span>
                </h5>

                <div className="stock-status">
                  <span>{getStockStatus(item.qty)}</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <Button variant="dark" className="m-2 px-3" onClick={() => decQtry(item.id)}>
                    -
                  </Button>
                  {item.qty}
                  <Button variant="dark" className="m-2 px-3" onClick={() => incQty(item.id)}>
                    +
                  </Button>
                </div>

                <Button variant="dark" className="w-100">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default Products;
