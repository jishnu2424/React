import React, { createContext, useState } from 'react'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import UseTable from './UseTable';
import USecard from './USecard';
const newcontext=createContext();

function Usecontext() {
    const [first, setfirst] = useState([{name:"anu",place:"tvm",number:161},{name:"sachu",place:"clt",number:12564},{name:"ammu",place:"tvm",number:161},{name:"adith",place:"tvm",number:161},{name:"midhu",place:"tvm",number:161}])

  return (
    <div>
        <newcontext.Provider value={[first,setfirst]}>

            <BrowserRouter>
            <Routes>
                <Route path='/'element={<><UseTable/><USecard/></>}/>

            </Routes>
            </BrowserRouter>
        </newcontext.Provider>




    </div>
  )
}

export default Usecontext
export{newcontext}