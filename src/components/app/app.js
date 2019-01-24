import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';
import idGenerator from 'react-id-generator';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
const AppSearch = styled.div`
display: flex;
margin: 1rem 0;
`;

export default class App extends Component  {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, id: idGenerator(),like: false},
                {label: "That is so good", important: true, id: idGenerator(),like: false},
                {label: "I need a break...", important: false, id: idGenerator(),like: false}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.ChenchLabel = this.ChenchLabel.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }
    deleteItem(id){
        this.setState(({data}) =>{

            const index = data.findIndex(elem => elem.id === id);
            console.log(index);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            console.log(newArr);
            return{
                data: newArr
            }
        })
    }
    ChenchLabel(label){
        let edittext = document.querySelector('.change');
        let t = edittext.value;
        this.setState(({data}) =>{
            const index = data.filter(elem => elem.label === label);
             const j = [data.slice(0,2)];
            const newItem = {
                 label:t,
                important: false,
                id: idGenerator()
            };
           const newArr = {...newItem,...data};

            return{
                // data:newArr
            }
        });
    }
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        };
        this.setState(({data}) =>{
          const newArr = [...data, newItem];
            return{
              data: newArr
          }
        })
    }
    onToggleImportant(id){
        this.setState(({data}) =>{
            const index = data.findIndex( elem => elem.id === id);

            const old = data[index];
            // const newItem = {...old,important: !old.important};
            const newItemTwo =  {...old,like: !old.like,important: !old.important};

            const newArr = [...data.slice(0, index),newItemTwo,...data.slice(index + 1)];

            return{
                data: newArr
            }
        }) }
    onToggleLiked(id){
        const star = document.querySelector('body');
        console.log(id);
        this.setState(({data}) =>{
           const index = data.findIndex( elem => elem.id === id);
            star.addEventListener('click',(e) =>{
                console.log(e);
            });
           const old = data[index];
           const newItem = {...old,like: !old.like};

           const newArr = [...data.slice(0, index), newItem,...data.slice(index + 1)];

           return{
               data: newArr
           }
       })
    }
    searchPost(items, term){
        if (term.length === 0){
            return items
        }

        return items.filter( (item) =>{
            return item.label.indexOf(term) > -1
        })
    }
    onUpdateSearch(term){
        this.setState({term})
    }
    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }
    onFilterSelect(filter){
        this.setState({filter})
    }
    render(){
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <AppSearch >
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </AppSearch>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onChanche={this.ChenchLabel}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }

};
