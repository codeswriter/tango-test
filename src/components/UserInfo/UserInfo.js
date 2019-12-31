import React from 'react';

export const UserInfo = props => (
    <div className="card" >
        <img src={props.user.avatar_url} className="card-img-top" alt="avatar" />
        <div className="card-body">
            <h5 className="card-title">{props.user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.user.login}</h6>
            <p className="card-text">{props.user.bio}</p>
            <a className="card-link float-right" rel="noopener noreferrer" href={props.user.html_url} target="_blank">Go To Profile</a>
        </div>
    </div>
);