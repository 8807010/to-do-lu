import React from 'react';
import './PostAddForm.css';

export default function PostAddForm() {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем вы думаете сейчас'
                className='form-control new-post-label'
            />

            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Добавить
            </button>
        </form>
    )
}
