import React from "react"
import Title from "../title"

export default () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{width: "100vw"}}>
            <Title />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-link text-dark" href="/home">Home </a>
                    <a className="nav-link text-dark" href="#">Starred</a>
                    <a className="nav-link text-dark" href="#">My Projects</a>
                </div>
            </div>
        </nav>

    )
}