import React, { useState } from 'react';

function Button() {

    let [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Likes: {count}</button>
        </>
    )
}

export default Button