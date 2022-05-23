import React from 'react';
import PostListItem from './../post-list-item/PostListItem';
import './PostList.css';

export default function PostList({ posts }) {

    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li
                className='list-group-item'
                key={id}>
                <PostListItem {...itemProps} />
            </li>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}
