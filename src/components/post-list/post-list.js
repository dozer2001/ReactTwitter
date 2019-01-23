import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item'

const PostList = ({posts}) =>{

    const elements = posts.map((item) => {

        if(item instanceof Object &&   Object.keys(item).length !== 0){
            return(
                <li key={item.id} className="list-group-item">
                    <PostListItem{...item}/>
                </li>
            )
        }
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};

export default PostList;