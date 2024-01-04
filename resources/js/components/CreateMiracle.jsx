import axios from "axios";
import React, { useState } from "react";

export default function CreateMiracle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://www.miracles.test/api/miracles",
                {
                    title,
                    content,
                    user_id: 1,
                }
            );
            console.log(response.data);
            setTitle("");
            setContent("");
        } catch (error) {
            console.log("There was an error posting the miracle", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Miracle</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">Create</button>
        </form>
    );
}
