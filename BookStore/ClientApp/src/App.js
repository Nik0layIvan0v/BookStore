import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router';

function App() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch('https://localhost:3001/api/home')
            .then((x) => x.json())
            .then((res) => setArray(res));
    }, []);

    return (
        <div>
            <ul>
                {array.map((x) => (
                    <li key={x}>{x}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
