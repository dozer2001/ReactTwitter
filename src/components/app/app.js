import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import {PostListDate} from '../post-list-item';


import './app.css';

const App = () => {
    return (
       <div className="app">
           <AppHeader/>
           <div className ="search-panel d-flex">
               <SearchPanel/>
               <PostStatusFilter/>
           </div>
           <PostList/>
           <PostAddForm/>
           <PostListDate/>
       </div>
    )
};
export default App;