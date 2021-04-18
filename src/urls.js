// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getURLS } from "./api";

// function URLS() {

//     const [urlData, setUrlData] = useState([]);

//     useEffect(async () => {
//         let urls = await getURLS();
//         setUrlData(...urlData, urls.data);
//     }, []);

//     console.log(urlData);

//     return (
//         <>
//             <table className="table data">
//                 <div className="row">
//                     <div className="col-2"></div>
//                     <div className="col-8 urls">
//                         <thead className="thead">
//                             <tr>
//                                 <th scope="col">Long URL</th>
//                                 <th scope="col">Short URL</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 urlData.map((links, index) => {
//                                     return <tr>
//                                         <td>{links.longURL}</td>
//                                         <td><a href={`http://localhost:7000/${links.shortURL}`} target="_blank">{links.shortURL}</a></td>
//                                     </tr>
//                                 })
//                             }

//                         </tbody>
//                     </div>
//                     <div className="col-2"></div>
//                 </div>
//             </table>
//             <div className="generatebtn"><button type="button" className="btn btn-primary generate">
//                 <Link to="/main" style={{ color: '#FFF' }}>Generate Another Link</Link>
//             </button></div>
//         </>
//     )
// }

// export default URLS;