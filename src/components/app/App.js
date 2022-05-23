import React from 'react';
import Header from '../header/Header';
import SearchPanel from '../search-panel/SearchPanel';
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';
import './App.css';

export default function App() {

    const data = [
        { label: 'Going to learn React', important: true, id: 'vrht'},
        { label: 'That is so good', important: false, id: 'vrtfh'},
        { label: 'I need a break...', important: false, id: 'vrt'},
    ];

    return (
        <div className='app'>
            <Header />
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}
