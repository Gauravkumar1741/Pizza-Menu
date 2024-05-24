import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {" "}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2> Our menu</h2>;
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </div>
      {/* <Pizza
        name="pizza spinachi"
        ingredients="Tomato,mozarella,spinach,ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        ingredients="Potato,capricorn,spinach,butter"
        photoName="pizzas/funghi.jpg"
        price={20}
      /> */}
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <div class={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>;<p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 19}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const closedhour = 22;
  const openhour = 10;
  const isOpen = hour >= openhour && hour <= closedhour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <order openhour={openhour} />
      ) : (
        <p>
          {" "}
          I am open when you come between {openhour}:00 to {closedhour}:00
          thanku
        </p>
      )}
    </footer>
  );
}
function order({ closedhour }) {
  //also use props lik function order(props)
  return (
    <div className="footer-content">
      <p>We are open until {closedhour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
