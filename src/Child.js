import React from 'react'

const Child = (props) => {
    return (
        <>
            
            {
                props.Age
            }

            <button onClick={()=>props.AddAge()}>
                Increase
            </button>
            <button onClick={()=>props.DecreaseAge ()}>
                Decrease
            </button>
        </>
    )
}

export default Child
