import React from "react";
import ReactDOM from "react-dom/client";


const HeadingComponent = () => (
    <>
    <h1>Hello form heading componet</h1>
    <Component2/>
    </>
   
)
   
    


const Component2 = () => <h1>hello form HeadingComponent2</h1>



const jsxheading = <h1 id="heading" className="header" tabIndex={1}>hello JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)



 