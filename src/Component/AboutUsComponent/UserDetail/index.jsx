import React from "react";

class UserDetails extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        console.log('Inside User Detail');
        return(<>
        User Name
        </>)
    };
}

export default UserDetails;
