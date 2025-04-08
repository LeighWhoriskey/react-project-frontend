'use client';

import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [data, setData] = useState<String>();

    useEffect(() => {

        const fetchData = async () =>{
            const response = await fetch("http://localhost:5000/hello");

            const json = await response.json();

            setData(json.message);
        }
        console.log(fetchData)
        console.log("hello");
    }),[];

    console.log("Test");
    return (
        <div>Expected Response: {data}</div>
    );
}


export default HomePage;