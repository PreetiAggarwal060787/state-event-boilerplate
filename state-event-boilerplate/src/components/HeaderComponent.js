import React from "react";
import LogoComponent from "./LogoComponent";
import ViewTitleComponent from "./ViewTitleComponent";
import './Component.css';


class HeaderComponent extends React.Component {
    // Define Constructor
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    //Define handleChange method
    handleChange(e) {
        this.setState({'value':e})
    }
    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component with title from child: {this.state.value}</h2>
                <LogoComponent input={this.state.value}></LogoComponent>
                <ViewTitleComponent input={this.state.value}handleChangeRef={this.handleChange}></ViewTitleComponent>
            </div>
        );
    }
}
export default HeaderComponent;