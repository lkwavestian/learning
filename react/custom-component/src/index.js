import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mocks/index.js';
import 'antd/dist/antd.css';
import '../src/assets/font/iconfont.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
