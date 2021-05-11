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
    }, [urlData]);
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
                <div className="container data center1">
                    <h2 className="center1 sub">YOUR URL HERE</h2>
                    <input className="form-control m-3" id="urlinput" placeholder="examplelongurl.com" type="text" value={longURL} onChange={(e) => {
                        validate(e.target.value);
                        setLongURL(e.target.value);
                    }} />
                </div>
                <span className="center1">{errorMessage}</span>
                <div className="center1"><button type="submit" className="btn btn-light text-light geturl m-3 bg-transparent center2">Get Url</button></div>
            </form>

            {/* <div className="center1"><button className="btn btn-light text-light geturl m-3 bg-transparent center2"><a href="#"></a>Generate Another Url</button></div> */}
            <div class="table-responsive center1">
                <table class="table text-light data center">
                    {/* <thead> */}
                    <tr>
                        <td>Long URL</td>
                        <td>Short URL</td>
                    </tr>
                    {/* </thead> */}
                    {/* <tbody> */}
                    {
                        urlData.map((url, index) => {
                            return <tr>
                                <td>{url.longURL}</td>
                                <td><a href={`https://guviurlshortener.herokuapp.com/${index}+${url.shortURL}`} target="_blank">{url.shortURL}</a ></td>
                            </tr>
                        })
                    }
                    {/* </tbody> */}
                </table>
            </div>
        </>
    )
}

export default Main;