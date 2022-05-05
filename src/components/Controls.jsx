import React, { useState } from "react";

const Controls = (props) => {
    const [name, setName] = useState("");
    return (
        <>
            <button onClick={() => props.dogWhistle([...props.dogs, name])}>
                add
            </button>

            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
            ></input>
        </>
    );
};

export { Controls };
