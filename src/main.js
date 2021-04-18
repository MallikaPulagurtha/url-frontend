import React, { useState, useEffect } from "react";
import { postURL, getURLS } from "./api";
import validator from "validator";
import { useParams } from "react-router";

function Main() {
    const params = useParams();
    console.log(params);

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {
        if (validator.isURL(value)) {
            setErrorMessage('Is Valid URL')
        }
        else {
            setErrorMessage('Enter Valid URL')
        }
    }

    const [longURL, setLongURL] = useState("");
    const [urlData, setUrlData] = useState([]);

    useEffect(async () => {
        let urls = await getURLS(params.id);
        setUrlData(urls.data.links);
    }, []);
    console.log(urlData);
    // console.log(links);

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                let urlData = { longURL };
                await postURL(params.id, urlData);
                setLongURL("");
            }}>
                <div className="container data">
                    <div className="row">
                        <div className="col-lg-12">
                            <label className="urllabel">YOUR URL HERE</label>
                            <input className="form-control m-3" style={{ height: "60px" }} type="text" value={longURL} onChange={(e) => {
                                validate(e.target.value);
                                setLongURL(e.target.value);
                            }} />
                        </div>
                        <span>{errorMessage}</span>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button className="btn btn-primary geturl m-3 bg-transparent" style={{ width: "100%", height: "60px", fontSize: "25px" }}>Get Url</button>
                        </div>
                    </div>
                </div>
            </form>
            <table className="table data">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 urls">
                        <tr>
                            <td scope="col">Long URL</td>
                            <td scope="col">Short URL</td>
                        </tr>
                        <tbody>
                            {
                                urlData.map((url, index) => {
                                    return <tr>
                                        <td>{url.longURL}</td>
                                        <td><a href={`http://localhost:7000/${index}+${url.shortURL}`} target="_blank">{url.shortURL}</a ></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </div>
                    <div className="col-2"></div>
                </div>
            </table>
            <div className="generatebtn"><button type="button" className="btn btn-primary generate bg-transparent">
                <a className="link" href="#" style={{ color: '#FFF' }}>Generate Another Link</a>
            </button></div>

            <button className="generatebtn" onClick={() => {
                window.localStorage.removeItem("app_token");
            }}>Logout</button>
        </>
    )
}

export default Main;