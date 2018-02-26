import React from 'react';
import { Link } from 'react-router';
import { NotFound } from '../components';

const NotFoundPage = (error) => {
    return (
        <div className="App-NotFoundPage__container">
            <NotFound />
        </div>
    )
}

export default NotFoundPage;