import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text }) => {
    return (
        <li className="list__item">
            <h2>{title}</h2>
            <p>{text} </p>
        </li>
    );
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};