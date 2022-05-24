import React from 'react';
import './Header.css';

export default function Header({liked, allPosts}) {
    return (
        <div className='app-header d-flex'>
            <h1>Artiom Sokolov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}
