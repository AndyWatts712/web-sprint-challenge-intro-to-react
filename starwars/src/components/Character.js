// Write your Character component here
import React from 'react';
import Styled from 'styled-components';


function Character(props) {
    console.log('PROPS', props)
    const { list } = props
    // console.log(list)

    // console.log(chr)
    return (
        <>
            {list.map(chr => {
                return (
                    <div>
                        <h2>{chr.name}</h2>
                        <p>Height: {chr.height}</p>
                        <p>Mass: {chr.mass}</p>
                        {/* <p>{chr.}</p> */}
                        {/* <p>{chr.}</p> */}
                    </div>
                )
            })}
        </>
    )
}

export default Character