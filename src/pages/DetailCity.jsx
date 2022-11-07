/* import React from 'react'
import React, { useRef, useState, useEffect } from 'react';
import '../components/DetailCity.css'

export default function DetailCity() {

    let { id } = useParams();
    useEffect(() => {
        fetch('../citys.json')
            .then(response => response.json())
            .then(response => response.filter(response.id === id))

    }, [])

    
    return (
        <section class="bg">
            <h1 class="title">{detail.name}</h1>
            <div class="blog-card">
                <img class="blog-img" src={detail.photo} />
                <div class="text-overlay">
                    <h2>{detail.continent}</h2>
                </div>
            </div>
        </section>
    )
} */



