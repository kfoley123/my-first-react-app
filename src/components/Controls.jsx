import React, { useState } from "react";

const Controls = (props) => {
    console.log(props);
    const [name, setName] = useState("");
    console.log(name);
    return (
        <div>
            <button onClick={() => props.dogWhistle([...props.dogs, name])}>
                add
            </button>

            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
            ></input>
        </div>
    );
};

export { Controls };
