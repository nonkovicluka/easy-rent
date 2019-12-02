import React from 'react';
import { Link } from "react-router-dom";

import '../../assets/css/404.css';

const Page404 = () => {

    return (
        <div className="body-404 d-flex w-100">
        
                <img
                    alt="..."
                    className="path"
                    src={require("../../assets/img/blob.png")}
                />      
                <div className="col justify-content-center align-self-center">
                    <svg className="svg-404" viewBox="0 0 500 150">
                        <symbol id="s-text">
                            <text textAnchor="middle" x="50%" y="80%">404</text>
                        </symbol>

                        <g className="g-ants">
                            <use xlinkHref="#s-text" className="text-404"></use>
                            <use xlinkHref="#s-text" className="text-404"></use>
                            <use xlinkHref="#s-text" className="text-404"></use>
                            <use xlinkHref="#s-text" className="text-404"></use>
                            <use xlinkHref="#s-text" className="text-404"></use>
                        </g >
                    </svg >

                    <div className="content">
                        <h1 className="h1-404">Page Not Found</h1>
                        <Link className="btn btn-round btn-success btn-simple" to="/">Back to Home</Link>
                    </div>
                </div >
            </div>
     
    );
};

export default Page404;