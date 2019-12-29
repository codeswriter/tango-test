import React from 'react';

export const SearchForm = props => (
    <div className="col">
        <form onSubmit={e => props.handleSubmit(e) }>
            <div className="form-row">
                <div className="col-sm-4 my-1">
                    <div className="input-group">
                        <input type="text" className="form-control"
                            placeholder="Enter Github Username"
                            value={props.inputValue}
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
)