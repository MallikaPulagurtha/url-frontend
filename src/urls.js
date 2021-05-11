import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getURLS } from "./api";

function URLS() {

    const params = useParams();
    console.log(params);

    const [urlData, setUrlData] = useState([]);

    useEffect(async () => {
        let urls = await getURLS(params.id);
        setUrlData(urls.data.links);
    }, []);

    console.log(urlData);

    return (
        <>
            <table className="table data">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 urls">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Long URL</th>
                                <th scope="col">Short URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                urlData.map((links, index) => {
                                    return <tr>
                                        <td>{links.longURL}</td>
                                        <td><a href={`http://localhost:7000/${links.shortURL}`} target="_blank">{links.shortURL}</a></td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </div>
                    <div className="col-2"></div>
                </div>
            </table>

        </>
    )
}

export default URLS;