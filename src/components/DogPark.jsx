import React, { useState } from "react";

import { Controls } from "./Controls";

const Dog = (props) => {
    return <li>{props.breed}</li>;
};

const DogPark = () => {
    const [list, setList] = useState(["husky", "beagle", "poodle"]);

    return (
        <>
            <Controls dogWhistle={setList} dogs={list} />
            {console.log(2)}
            <ul>
                {list.map((dog, index) => {
                    return <Dog breed={dog} key={index} />;
                })}
            </ul>
        </>
    );
};
export default DogPark;
