import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link class="nav-link" to="/">
                                TODOs <span class="sr-only">(current)</span> </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/add">
                                ADD TODO
                                </Link>
            
                </li>
              </ul>
            </div>
          </nav>

            /*<nav className="navbar navbar-expand-lg navbar light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Todos
                                </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add">
                                Add todo
                                </Link>
                        </li>
                    </ul>
                </div>


            </nav>
            */
        )
    }
}
export default Navbar