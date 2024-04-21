import React from "react";

class UserDetails extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userData:{}
        };
    }
    componentDidMount(){
        fetch('https://api.github.com/users/AlishaRanjan')
        .then(resp =>{
            // console.log("resp", resp);
            if(resp.status === 200){
                return resp.json();
            }else{
                return "Error fetching data";
            }
        }).then(data=>{
            this.setState({userData: data});
        }).catch((err)=>{
            this.setState({userData: err});
        })
    }
    render(){
        console.log("data",this.state.userData);
        return(<>
        User Name
        <div>
            <img src ={this.state.userData.avatar_url} alt="Developer"/>
        </div>
        <div>
            {this.state.userData.name} - {this.state.userData.bio}
        </div>
        <div>
            {this.state.userData.location}
        </div>
        <div>
            <a href={this.state.userData.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Link
            </a>
        </div>
        </>)
    };
}

export default UserDetails;
