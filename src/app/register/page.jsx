import React from "react";
import "@/sass/__account.scss";

const Account = () => {
  return (
    <div className="account__wrapper">
      <div className="container">
        <div className="account__section-title">
          <h1>Account</h1>
        </div>
        <form className="account__section">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Job" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
