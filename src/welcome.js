import React from "react"
import { Link } from "react-router-dom"

function Welcome() {
    return (
        <>
            <div className="welcomepage bg"><button type="button" className="btn btn-primary welcomebtn bg-transparent">
                <Link className="link" to="/login" style={{ color: '#FFF' }}>GET STARTED</Link>
            </button></div>
        </>
    )
}

export default Welcome;