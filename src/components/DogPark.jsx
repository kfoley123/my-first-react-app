import React, { useState } from "react";
import { ColorButton } from "./ColorButton";

import { Controls } from "./Controls";

const Dog = (props) => {
    return <li>{props.breed}</li>;
};

const DogPark = () => {
    const [list, setList] = useState(["husky", "beagle", "poodle"]);

    return (
        <>
            <Controls dogWhistle={setList} dogs={list} cats={"test"} />

            {console.log(2)}
            <ul>
                {list.map((dog, index) => {
                    return <Dog breed={dog} key={index} />;
                })}
            </ul>
            <ColorButton text={"color"} />
            <ColorButton text={"blue"} />
        </>
    );
};
export default DogPark;
