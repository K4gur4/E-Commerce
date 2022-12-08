import styled from 'styled-components'


export const Container= styled.div`
width: 100%;
height: 50px;
background-color: white;
position: sticky;
top: 0;
z-index: 9999;
`
export const TopbarWrapper= styled.div`
height: 100%;
padding: 0px 20px;
display:flex;
justify-content: space-between;
align-items: center;
color: white;
`


export const TopLeft= styled.div``
export const TopbRight= styled.div`
display:flex;
align-items: center;

`
export const Logo= styled.span`
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    color: black;
`


export const Icon= styled.div`
position: relative;
cursor: pointer;
margin-right: 10px;
color: black;
`
export const IconItem= styled.span`
width: 15px;
height: 15px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: -5px;
right: 0px;
background-color: red;
color: white;
border-radius: 50%;
font-size: 10px;
`

export const User= styled.span`


`
