import React, { Component } from 'react';
import Header from '../header/Header';
import SearchPanel from '../search-panel/SearchPanel';
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to learn React', important: true, like: false, id: 1 },
                { label: 'That is so good', important: false, like: false, id: 2 },
                { label: 'I need a break...', important: false, like: false, id: 3 },
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                date: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                date: newArr
            }
        })
    }

    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <div className='app'>
                <Header
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        )
    }
}