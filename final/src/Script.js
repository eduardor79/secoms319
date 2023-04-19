import "./App.css";
import logo from "./logo.png";
import React, { useState } from "react";
import Products from "./Products.json";
function Script() {
  const [screen, setScreen] = useState("Catalog");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [ProductsCart, setProductsCart] = useState(Products);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardError, setCardError] = useState("");
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "card":
        let temp = event.target.value.replace(/-/g, "");
        let newVal = "";

        for (var i = 0, nums = 0; i < temp.length; i++) {
          if (nums != 0 && nums % 4 == 0) {
            newVal += "-";
          }
          newVal += temp[i];
          if (isNumeric(temp[i])) {
            nums++;
          }
        }
        setCard(newVal);
        break;
      case "email":
        console.log(email);
        setEmail(event.target.value);
        break;
    }
  };
  let validate = function () {
    let valid = true;
    if (name == "") {
      valid = false;
      setNameError("*Name needs to be filled out");
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        valid = false;
        setNameError("*Name can only have letters");
      } else {
        setNameError("*Valid");
      }
    }
    if (card == "") {
      valid = false;
      setCardError("*Card needs to be filled out");
    }

    if (typeof card !== "undefined") {
      if (!card.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
        valid = false;
        setCardError("*Card needs to be 16 numbers long");
      } else {
        setCardError("*Valid");
      }
    }

    if (email == "") {
      valid = false;
      setEmailError("*Email needs to be filled out");
    }

    if (typeof email !== "undefined") {
      if (
        !email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        valid = false;
        setEmailError("*Email is not formatted correctly");
      } else {
        setEmailError("*Valid");
      }
    }
    return valid;
  };
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  const handleSubmit = () => {
    if (validate()) {
      setScreen("Confirmation");
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = ProductsCategory.filter((eachProduct) => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProductsCategory(results);
  };
  const checkOut = () => {
    setScreen("Cart");
  };
  const lowerAmount = (e) => {
    const productsCart = [...ProductsCart];
    const product = productsCart.find((a) => a.id === e.id);
    product.amount = parseInt(product.amount) - 1;
    if (product.amount < 0) {
      product.amount = 0;
    }
    setProductsCart(productsCart);
  };
  const increaseAmount = (e) => {
    const productsCart = [...ProductsCart];
    const product = productsCart.find((a) => a.id === e.id);
    product.amount = parseInt(product.amount) + 1;
    setProductsCart(productsCart);
  };
  const Catalog = () => {
    return (
      <div
        style={{
          width: "50%",
          margin: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Products ({ProductsCategory.length})</h2>
        <div
          style={{
            maxHeight: "1000px",
            overflowY: "scroll",
            textAlign: "center",
          }}
        >
          {ProductsCategory.map((product) => (
            <div
              key={product.id}
              style={{
                maxWidth: "50%",
                paddingBottom: 50,
              }}
            >
              <div>
                <img
                  alt="Product"
                  style={{ width: 300, height: 300 }}
                  src={product.image}
                />
              </div>
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      borderWidth: 3,
                      borderColor: "black",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3>
                      <a href={product.href}>
                        <span aria-hidden="True" />
                        <span style={{ fontSize: "16px", fontWeight: "600" }}>
                          {product.title}
                        </span>
                      </a>
                    </h3>
                    <p>${product.price}</p>
                  </div>
                  <p>
                    Rating:
                    {product.rating}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      borderWidth: 3,
                      borderColor: "black",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        width: "33%",
                        fontSize: 30,
                        borderRightWidth: 3,
                        borderColor: "black",
                      }}
                      onClick={() => lowerAmount(product)}
                    >
                      -
                    </button>{" "}
                    <div
                      style={{
                        flex: 2,
                        width: "34%",
                        paddingLeft: "10%",
                        paddingRight: "10%",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 15,
                        }}
                      >
                        {product.amount}
                      </p>
                    </div>
                    <button
                      type="button"
                      style={{
                        flex: 3,
                        width: "33%",
                        fontSize: 30,
                        borderLeftWidth: 3,
                        borderColor: "black",
                      }}
                      onClick={() => increaseAmount(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            checkOut();
          }}
          style={{ width: 150, height: 50, backgroundColor: "green" }}
        >
          Checkout
        </button>
      </div>
    );
  };
  const getPrice = () => {
    let total = 0;
    ProductsCart.map(
      (product, index) => (total = total + product.amount * product.price)
    );
    return (total * 1.07).toFixed(2);
  };
  const Cart = () => {
    return (
      <div>
        <h1>Checkout</h1>
        {ProductsCart.map((product, index) => (
          <div>
            {product.amount !== "0" ? (
              <div
                key={index}
                style={{
                  maxWidth: "50%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderWidth: 3,
                    borderColor: "black",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>
                    <a href={product.href}>
                      <span aria-hidden="True" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {product.title}
                      </span>
                    </a>
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      minWidth: "20%",
                    }}
                  >
                    Amount: {product.amount}
                  </p>
                  <p style={{ minWidth: "10%" }}>
                    ${product.price * product.amount}
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
        <div>
          <h3>Total: ${getPrice()} (Tax included)</h3>
        </div>
        <form id="checkout-form">
          {/* Full Name */}
          <div>
            <label htmlFor="inputName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              placeholder="name"
              onChange={(event) => handleFormChange(event)}
            />
            <p>{nameError}</p>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              id="inputEmail4"
              placeholder="email"
              name="email"
              onChange={(event) => handleFormChange(event)}
            />
            <p>{emailError}</p>
          </div>
          {/* Credit Card */}
          <div>
            <label htmlFor="inputCard">Card</label>

            <input
              type="text"
              id="inputCard"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              name="card"
              onChange={(event) => handleFormChange(event)}
            />
            <p>{cardError}</p>
          </div>
          <div>
            <label htmlFor="inputAddress">Address</label>
            <input type="text" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div>
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div>
            <label htmlFor="inputCity">City</label>
            <input type="text" id="inputCity" />
          </div>
          <div>
            <label htmlFor="inputState">State</label>
            <select id="inputState">
              <option selected="">Choose...</option>
            </select>
          </div>
          <div>
            <label htmlFor="inputZip">Zip</label>
            <input type="text" id="inputZip" />
          </div>
          <div>
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="button"
            >
              Order
            </button>
            <button
              onClick={() => {
                window.location.reload();
              }}
              type="button"
            >
              Return
            </button>
          </div>
        </form>
      </div>
    );
  };
  const Confirmation = () => {
    return (
      <div>
        <div className="card-body">
          <h5 className="card-title">Order summary</h5>
          <p className="card-text">Here is a summary of your order.</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Card used: {card}</p>
          {ProductsCart.map((product, index) => (
            <div>
              {product.amount !== "0" ? (
                <div
                  key={index}
                  style={{
                    maxWidth: "50%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      borderWidth: 3,
                      borderColor: "black",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3>
                      <a href={product.href}>
                        <span aria-hidden="True" />
                        <span style={{ fontSize: "16px", fontWeight: "600" }}>
                          {product.title}
                        </span>
                      </a>
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        minWidth: "20%",
                      }}
                    >
                      Amount: {product.amount}
                    </p>
                    <p style={{ minWidth: "10%" }}>
                      ${product.price * product.amount}
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
        <ul></ul>
        <a
          href=""
          onClick={() => {
            window.location.reload();
          }}
          className="btn btn-secondary"
        >
          Return
        </a>
      </div>
    );
  };
  const chooseComponent = (screen) => {
    switch (screen) {
      case "Catalog": {
        return Catalog();
      }
      case "Cart": {
        return Cart();
      }
      case "Confirmation": {
        return Confirmation();
      }
      default:
        return <div></div>;
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "25%", flex: 1 }}>
        <img src={logo} alt="Sunset in the mountains" />
        <div>
          <h1> Store</h1>
          <p className="text-gray-700 text-white">
            {" "}
            by -{" "}
            <b style={{ color: "orange" }}>
              Eduardo Ramirez and Isabelle Raghavan
            </b>
          </p>

          <div className="py-10">
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div style={{ flex: 2 }}>{chooseComponent(screen)}</div>
    </div>
  );
}
export default Script;
