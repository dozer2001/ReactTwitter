import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item'
import { ListGroup,ListGroupItem } from 'reactstrap';


const PostList = ({posts,onDelete}) =>{

    const elements = posts.map((item) => {
        const {id,label,important,...ItemProps} = item;
        if(item instanceof Object    ){
            return(
                <ListGroupItem key={id} >
                    <PostListItem{...ItemProps}
                    onDelete={() => onDelete(id)}/>
                </ListGroupItem>
            )
        }
    });

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
};

export default PostList;