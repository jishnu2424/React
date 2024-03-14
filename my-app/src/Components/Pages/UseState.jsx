import React, { useState } from 'react'

function UseState() {

const [name, secondname] = useState("Adith");
const [count, setcount] = useState(1)

function change(){
    secondname("Jishnu");
}


function change1(){

    var add=count+1;
    setcount(add)

}
// function change2(){
//     var min=count-1;

//     setcount(min)
//     if (min<0)
//     alert("stop");
// }
function change2(){
    var min=count-1;
    
    if (count==0)
    alert("stop");
    else{
        setcount(min)
    }
}


  return (
    <div>
        <h1>my name is {name}</h1>
        <button onClick={change}>Click Me</button>
        <button onClick={()=>secondname([5,6,2,3,4,2,8,5,7])}>Next</button>

        <h1>Count is :{count}</h1>
        <button onClick={change1}>Add</button><br /><br />
        <button onClick={change2}>Min</button>
    </div>
  )
}

export default UseState