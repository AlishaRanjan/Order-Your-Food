import React from "react";
import UserDetails from "./UserDetail";
class AboutUsComponent extends React.Component {

    constructor(props){
        super(props);
        console.log('About Us constructor called');
        this.state={};
    }
    componentDidMount(){
        console.log('Component Will mount is called');
    }

    render(){
        console.log('About Us component');
        return (<>
            <UserDetails/>
        </>)
    };
};

export default AboutUsComponent;