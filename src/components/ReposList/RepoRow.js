import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBalanceScale } from '@fortawesome/free-solid-svg-icons';


export const RepoRow = props => (
    <div className="media text-muted pt-3">
        <div className="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
                <p className="media-body pb-3 mb-0 lh-125">
                    <strong className="d-block text-gray-dark">{props.repo.name}</strong>
                    <small>{props.repo.description}</small>
                </p>
            </div>
            <span className="p-2">
                <FontAwesomeIcon icon={faStar} /> {props.repo.stargazers_count}
            </span>
            <span className="p-2">
                <FontAwesomeIcon icon={faBalanceScale} /> { props.repo.license ? props.repo.license.name : 'No License'}
            </span>
            <span className="float-right">
                <a rel="noopener noreferrer" href={props.repo.html_url} target="_blank" >Go to repository</a>
            </span>
        </div>
    </div>
);