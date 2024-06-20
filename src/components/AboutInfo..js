import React from "react";

class AboutInfoClass extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            count : 0
        }
    }
     
        
    render() {
        const {name, location} = this.props
        const {count} = this.state
        
        return (
            <div>
                <h2>count : {count}</h2>
                <button onClick={()=>{
                    this.setState({count : this.state.count +1 }) 
                }}>click</button>
                <h2>{name}</h2>
                <h2>{location}</h2>
            </div>
        )
    }
}
export default AboutInfoClass;

// const AboutInfo = ({name}) =>{
//     return (
//         <div className="about-info">
//             <h2>Name : {name}</h2>
//             <h3>Location : Santirbazar</h3>
//             <h4>Contact : github-arpan</h4>

//         </div>
//     )
// }