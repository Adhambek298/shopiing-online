import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios }  from "../../api";
import { urls } from "../../constants/urls";
import Login from "../../assets/icons/Login";
import Header from "../layout/Header";

function User() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let obj = {};
    for (let el of e.target) {
      if (el.type !== "submit") {
        obj[el.name] = el.value;
      }
    }

    setLoading(true);
    Axios.post(urls.auth.register, obj)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          navigate("/");
        }
      })
      .catch((err) => console.log("Error during register!"))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Header />
      <hr />
    <section className="sign">
      <div className="container">
        <div className="sign-row">
          <div className="sign-image">
           <Login />
          </div>
          <div className="sign-content">
            <h2 className="sign-title">Create an account</h2>
            <p className="sign-text">Enter your details below</p>

            <form className="sign-form" onSubmit={handleSubmit}>
              <div className="sign-group">
                <input type="text" placeholder="Name" name="name" required />
              </div>
              <div className="sign-group">
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div className="sign-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <button type="submit" className="sign-button" disabled={loading}>
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>

            <p className="sign-login">
              Already have an account?
              <Link to="/login">
                <a href="#">Log in</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default User;
