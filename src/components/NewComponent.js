import React, { useState } from "react";

const NewComponent = () => {
    const newAlert = () => {
        alert("Hello World!");
    };
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Josh");
    const [foo, bar] = ["Aesop", "Rock"];

    return (
        <>
            {/* {newAlert()} */}
            {"foo :" + foo}
            {"bar :" + bar}
            <h1>My New Component</h1>
            <h2>hello</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>You clicked {count} times</p>
            <button onClick={() => setName("Venkat")}>Change Name</button>
            <p>Your name is {name}</p>
        </>
    );
};

export default NewComponent;
