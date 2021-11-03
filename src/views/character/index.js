import React from 'react'
import { useParams } from "react-router-dom";

export default function Character() {
    const { id } = useParams();
    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    )
}