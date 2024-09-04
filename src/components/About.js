import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        // console.log("Parent Render");
        return(
            <div className="about-container">
                <div className="about flex flex-col ml-2 mt-5 text-xl">
                    <h1 className="font-bold">About</h1>
                    <h2>This is Namaste React Series</h2>
                    <h3>We Are currently doing Namste Food Episode</h3>
                    {/* <User name="Nayan Dhawan (Function)"/> */}
                    <UserClass name="Nayan Dhawan (Class)" />
                </div>
            </div>
        );
    }
}

// const About = () => {
    // return(
    //     <div className="about-container">
    //         <div className="about">
    //             <h1>About</h1>
    //             <h2>This is Namaste React Series</h2>
    //             <h3>We Are currently doing Namste Food Episode</h3>
    //             {/* <User name="Nayan Dhawan (Function)"/> */}
    //             <UserClass name="Nayan Dhawan (Class)" />
    //         </div>
    //     </div>
    // );
// };

export default About;