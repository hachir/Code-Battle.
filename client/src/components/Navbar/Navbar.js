import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import "../../App.css";
import "./Navbar.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faStar from "@fortawesome/fontawesome-free-solid/faStar";

import axios from "axios";

class Navbar extends Component {


  render() {
    return (
        <nav className="navbar">
          <section className="navbar-section">
            <Link to="/" className="logo btn btn-link">
              <span className="text-secondary">Code Battle</span>
            </Link>
          </section>
          <section className="navbar-section">

            {this.props.loggedIn ? (
                [
                  <Link key="username" to="#" className="btn btn-link"
                        onClick={this.props.showUserModal}>
                    <span
                        className="text-secondary">Welcome {this.props.username}<span
                        style={{padding: "0 10px"}}>|</span>
                      <FontAwesomeIcon icon={faStar}
                                       color="yellow"/> {this.props.userscore}</span>
                  </Link>,
                  <Link key="logout" to="#" className="btn btn-link"
                        onClick={this.logout}>
                    <span className="text-secondary">Logout</span>
                  </Link>
                ]
            ) : (
                [
                  <Link key="home" to="/" className="btn btn-link">
                    <span className="text-secondary">Home</span>
                  </Link>,
                  <Link key="login" to="/" className="btn btn-link"
                        onClick={this.props.showLoginHandler}>
                    <span className="text-secondary">Login</span>
                  </Link>
                ]
            )}
          </section>
        </nav>
    );

  }
}

export default withRouter(Navbar);