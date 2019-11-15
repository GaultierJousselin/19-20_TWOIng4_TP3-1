import React from "react";
import "./App.css";

class HelloTest extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.prenom}
            </div>
        );
    }
}

export default HelloTest;