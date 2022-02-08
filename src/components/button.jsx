import React, { Component } from "react";

class CoolButton extends Component {
    state = {
        dogs: ["husky", "beagle", "poodle"],
    };
    styles = {
        fontSize: 40,
        fontWeight: "bold",
    };

    render() {
        return (
            <React.Fragment>
                <button style={this.styles}> hello </button>
                <ul>
                    {this.state.dogs.map((dog) => {
                        return <li key={dog}>{dog}</li>;
                    })}
                </ul>
            </React.Fragment>
        );
    }
}
export default CoolButton;
