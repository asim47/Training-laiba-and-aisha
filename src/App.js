// import React, { useState } from 'react'
// import Child from "./Child"

// const App = () => {

//   const [Age, setAge] = useState(10)


//   function AddAge() {
//     setAge(Age + 1)
//   }

//   function DecreaseAge() {

//     if (Age == 0) return

//     setAge(Age - 1)
//   }

//   return (
//     <>
//       {/* <Child
//         AddAge={() => AddAge()}
//         DecreaseAge={() => DecreaseAge()}
//         Age={Age}

//       /> */}




//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'




// const App = () => {

//   const [List, setList] = useState([
//     "Asim",
//     "Aisha",
//     "Laiba",
//     "ilsa"
//   ])

//   const [Text, setText] = useState("")



//   function addToList() {


//     if (!Text) return

//     setList([
//       ...List,
//       Text,
//     ])


//     setText("")
//   }


//   function deleetFromList(name) {

//     console.log(name)


//     setList(
//       List.filter(x => x !== name)
//     )

//   }

//   return (
//     <>

//       <input
//         placeholder="Add TO List"
//         value={Text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button onClick={() => addToList()}>
//         Add
//       </button>
//       {
//         List.map((value, index, arr) => {
//           return (
//             <>
//               <h1> {value} </h1>
//               <button onClick={() => deleetFromList(value)}  >Deleet  {value} </button>

//             </>
//           )
//         })
//       }


//     </>
//   )
// }

// export default App



import React from 'react'
import BoxShadowChanger from './BoxShadowChanger'
import CssWithReact from './CssWithReact'

const App = () => {
  return (
    <div>
        {/* <CssWithReact/> */}
        <BoxShadowChanger/>
    </div>
  )
}

export default App
