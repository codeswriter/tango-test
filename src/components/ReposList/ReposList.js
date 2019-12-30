import React from 'react';
import { RepoRow} from './RepoRow';

export const ReposList = props => (
    <div className="p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Repositories</h6>
    {
        props.repos.map(repo =>
            <RepoRow key={repo.id} repo={repo} />
        )
    }
</div>
);