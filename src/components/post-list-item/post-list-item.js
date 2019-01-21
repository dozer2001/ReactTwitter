import React from 'react';
import './post-list-item.css'
const PostListItem = () => {
    return(
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>

            </div>
        </li>
    )


};
const PostListDate = () => {
    let date1 = new Date();
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    let date = date1.toLocaleString("ru", options);
    return (
        <span className="post-list-date">
            {date}
        </span>
    )
};
export {PostListItem,PostListDate};