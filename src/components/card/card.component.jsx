import React from 'react';
import "./card-style.css"

export function Card(props) {
    // console.log(props);
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.children.id}?set=set2`} alt="Loading...">
            </img>
            <h2>{props.children.name}</h2>
            <h3>{props.children.email}</h3>
        </div>
    );
}