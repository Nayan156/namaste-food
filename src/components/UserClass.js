import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location"
            }
            // count: 0,
        }
        // console.log("Child Constructor");
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/nayan156");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        // console.log("Child component did Mount");
    }

    componentDidUpdate(){
        // console.log("Child Component Updated");
    }

    componentWillUnmount(){
        // console.log("Child Component will unmount");
    }

    render(){
        // const { name } = this.props;
        const { name, location, avatar_url } = this.state.userInfo;

        // console.log("Child Render");

        return(
            <div className="user-card">
                <img className="user-img" src={avatar_url} />
                <div>
                    <h2>Name: {name}</h2>
                    {/* <h3 onClick={()=>{
                        this.setState({
                            count: this.state.count +1,
                        })
                    }}>Count: {count}</h3> */}
                    <h3>Location: {location}</h3>
                    <h4>Contact: @NayanDhawan</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;