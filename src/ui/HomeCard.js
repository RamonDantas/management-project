import React, { Component } from 'react';

const HomeCard = (props) => {

    return(
        <div className={"col-12 col-sm-6 col-md-4"}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;