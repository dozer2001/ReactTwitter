import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item'
import { ListGroup,ListGroupItem } from 'reactstrap';


const PostList = ({posts,onDelete,onChanche,onToggleLiked,onToggleImportant}) =>{

    const elements = posts.map((item) => {
        const {id,...ItemProps} = item;
        const {label} = item;

        if(label !== '' && label && id   ){
            return(
                <ListGroupItem key={id} >
                    <PostListItem{...ItemProps}
                    onDelete={() => onDelete(id)}
                    onChanche ={() => onChanche(label)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                    />
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