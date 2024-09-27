import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const fillInDetails = [
  {
    title: "Name",
    type: "text",
  },
  {
    title: "Email",
    type: "text",
  },
  {
    title: "Password",
    type: "password",
  },
];

function App() {
  return (
    <div className="container">
      <section className="account"></section>
      <section className="account-settings">
        <Profile />
      </section>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h3 className="acc-set">Account Settings</h3>
      <div className="profile-card-container">
        <Profilecard />
        <User />
        <Details />
      </div>
    </div>
  );
}

function Profilecard() {
  return (
    <div>
      <div className="profile-pic-cont">
        <img src="./profile-pic.svg" alt="dp" />
        <div className="profile-pic-button-cont">
          <button>Change photo</button>
          <button>Remove Photo</button>
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="user-cont">
      <h3>Akinyemi Boluwatife Oluwasegun</h3>
      <p>boluintech@gmail.com / boluakinyemi500@gmail.com</p>
    </div>
  );
}

function Details() {
  return;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
