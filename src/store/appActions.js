import React from 'react';
import ReactDOM from 'react-dom';

export default {
    setText(text) {
        return { type: 'SET_TEXT', payload: text }
    }
}