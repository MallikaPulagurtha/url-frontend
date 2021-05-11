import React from "react"
import { Link } from "react-router-dom"

function Welcome() {
    return (
        <>
            <h2 className="center1 sub">Shawty's got you covered!</h2>
            <hr />
            <p className="center1 main">Sit back and grab your coffee</p>
            <Link className="link" to="/login" style={{ color: '#FFF' }}>
                <div className="welcomepage bg"><button type="button" className="btn btn-primary welcomebtn bg-transparent">CONVERT</button></div>
            </Link>
        </>
    )
}

export default Welcome;