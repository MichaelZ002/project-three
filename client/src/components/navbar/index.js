import React from "react"
import Title from "../title"
import {Link} from "react-router-dom"

export default () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{width: "100vw"}}>
            <Title />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link text-dark" to="/home">Home </Link>
                    <Link className="nav-link text-dark" to="#">Starred</Link>
                    <Link className="nav-link text-dark" to="#">My Projects</Link>
                </div>
            </div>
        </nav>

    )
}