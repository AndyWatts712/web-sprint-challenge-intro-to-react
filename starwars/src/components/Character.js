// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 60%;
    border: 2px solid black;
    margin: 10px auto;
    background-color: rgb(192, 154, 115, .5);
`
function Character(props) {
    console.log('PROPS', props)
    const { list } = props
    // console.log(list)

    // console.log(chr)
    return (
        <>
            {list.map(chr => {
                return (
                    <Card>
                        <h2>{chr.name}</h2>
                        <p>Height: {chr.height}</p>
                        <p>Mass: {chr.mass}</p>
                        {/* <p>{chr.}</p> */}
                        {/* <p>{chr.}</p> */}
                    </Card>
                )
            })}
        </>
    )
}

export default Character