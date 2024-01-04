import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Miracles() {
    const [miracles, setMiracles] = useState([]);

    useEffect(() => {
        const fetchMiracles = async (e) => {
            try {
                const response = await axios.get(
                    "http://www.miracles.test/api/miracles"
                );
                setMiracles(response.data);
            } catch (error) {
                console.log("There was an error fetching the miracle", error);
            }
        };
        fetchMiracles();
    }, []);

    return (
        <>
            <h1>Miracles</h1>
            <ul>
                {miracles.map((miracle) => (
                    <li key={miracle.id}>
                        <h2>{miracle.title}</h2>
                        <p>{miracle.content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
