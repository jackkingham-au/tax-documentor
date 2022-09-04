import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Payment from './components/Payment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    </BrowserRouter>
);