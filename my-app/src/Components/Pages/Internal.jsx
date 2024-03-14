import React from 'react'
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";

function Internal() {
    const p ={color:"cyan", backgroundColor:"black",padding:"50px"};
    const c={maxWidth:"50%",color:"blue"}
  return (
    <div>
        <h1 style={c}>Lorem <AiFillEnvironment/> ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum eius sunt. Voluptatum est ea repellendus atque quae necessitatibus, corrupti id, nisi assumenda repudiandae cupiditate maiores perspiciatis voluptatem fugiat nulla?</h1>
<p style={p}>Lorem ipsum dolor    sit amet, consectetur adipisicing elit. Earum fuga numquam hic corrupti maxime voluptate cum illum cupiditate, eveniet adipisci illo dolorem sint id perspiciatis harum ex modi quas temporibus enim ea. Animi culpa corporis sapiente cumque enim nesciunt. Fugit, sed molestias similique repellat tempora et illum quaerat assumenda sequi!</p>
<AiFillChrome />

    </div>
  )
}

export default Internal