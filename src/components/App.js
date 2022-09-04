import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import { calcAmountTaxable, calcTotalEarned } from '../helpers/calculateNumbes';

const App = () => {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(false); 

    useEffect(() => {
        axios.get('.netlify/functions/getGoogleSheet').then((response) => {
            setData(response.data.rows);
            setLoading(false);
        });
    }, []);

    if(loading || !data) {
        return (
            <>
                <div className="container">
                    <h2>Loading...</h2> 
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container">
                    <h1>Your Numbers</h1>
                    <div className="row">
                        <h4>Total Amount Earned:</h4>
                        <p>${calcTotalEarned(data)}</p>
                    </div> 
                    <hr />
                    <div className="row">
                        <h4>Total Amount Taxable:</h4>
                        <p>${calcAmountTaxable(data)}</p>
                    </div> 
                    <hr />                    
                    <div className="row">
                        <h4>Current Tax Percentage:</h4>
                        <p>{data[0].taxPercentage}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
