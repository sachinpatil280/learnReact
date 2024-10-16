import React from "react";

const Hello = () =>{
    // return(
    //     <div classname='dummyClass'>
    //         <h1>Hello Sachin</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className:'dummyClass'}, 
        React.createElement('h1', null, 'Hello Sachin'))
};

export default Hello;