import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const fillInDetails = [
  {
    title: "Name",
    type: "text",
    placeholder: "Please input your name...",
  },
  {
    title: "Email",
    type: "text",
    placeholder: "Please input your Email...",
  },
  {
    title: "Password",
    type: "password",
    placeholder: "Please input your password...",
  },
];

const optionDetail = [
  {
    title: "General",
    image: "home.svg",
  },
  {
    title: "Account",
    image: "./account.svg",
  },
  {
    title: "Time Blocks",
    image: "./Time-block.svg",
  },
  {
    title: "Appearance",
    image: "./appearance.svg",
  },
  {
    title: "Productivity",
    image: "./productivity.svg",
  },
  {
    title: "Notification",
    image: "./notification.svg",
  },
  {
    title: "Integrations",
    image: "./integration.svg",
  },
  {
    title: "Subscriptions",
    image: "./subscription.svg",
  },
];

function App() {
  return (
    <div className="container">
      <section className="account">
        <Sett />
      </section>
      <section className="account-settings">
        <Profile />
        <Details />
        <Factor />
        <Accounts />
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
          <button className="red-button">
            {" "}
            <span>
              {" "}
              <img src="red-trash.svg" alt="trash" />{" "}
            </span>{" "}
            Remove Photo
          </button>
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
  return (
    <>
      <ul className="details-list-cont">
        {fillInDetails.map((detail) => (
          <List
            title={detail.title}
            type={detail.type}
            placeholder={detail.placeholder}
          />
        ))}
      </ul>
      <button className="details-list-cont-button">Change password</button>
    </>
  );
}

function List({ title, type, placeholder }) {
  return (
    <li className="details-list">
      <p>{title}</p>
      <p>
        {" "}
        <input type={type} placeholder={placeholder} />
      </p>
    </li>
  );
}

function Factor() {
  return (
    <div className="fator-container">
      <h2>Two-factor authnetication</h2>
      <p className="acct-blur"> You have enable two-factor authentication</p>
    </div>
  );
}

function Accounts() {
  return (
    <div className="accounts-log">
      <h3> Connected accounts </h3>
      <p className="acct-blur"> Connect your accounts to easy sign in </p>
      <p className="acc-log-dec">Disconnect Google</p>
      <p className="acc-log-dec">Connect with Apple</p>
    </div>
  );
}

function Sett() {
  return (
    <div className="sett-cont">
      <h2 className="sett-set">Settings</h2>
      <Options />
    </div>
  );
}

function Options() {
  return (
    <div className="opt-cont">
      <input type="text" placeholder="Search" />
      <OptionsList />
    </div>
  );
}

function OptionsList() {
  return (
    <ul className="OptionsListItems-cont">
      {optionDetail.map((list) => (
        <OptionsListItems title={list.title} image={list.image} />
      ))}
    </ul>
  );
}

function OptionsListItems({ title, image }) {
  return (
    <li className="OptionsListItems">
      <p>
        <img src={image} alt="img" /> {title}
      </p>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
