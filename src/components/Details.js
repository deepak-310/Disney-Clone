import React from 'react'
import styled from 'styled-components'

const Details = () => {
  return (
    <Container>
        <Background>
            <img  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
        </Background>
        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
        </ImageTitle>
        <Controles>
            <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png"/>
            <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>    
            </AddButton> 
            <GroupButton>
                <img src="/images/group-icon.png" />
            </GroupButton>
        </Controles>
        <SupTitle>
            jasbvvjasb isddhfjasb
        </SupTitle>
        <Discription>
            My name is deeepak chouhan . i am 19 yeras old , I like to code , design , inovate  and experiment . I am socail persone who like to meet new peopela ex
        </Discription>
    </Container>
  )
}

export default Details
const SupTitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
margin-top:20px;
min-height:20px;
`

const Discription = styled.div`
line-height:1.4;
color:rgb(249,249,249);
font-size:20px;
margin-top:16px;
min-height:20px;
width:60%
`

const Container = styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position : relative;

`
const Background = styled.div`
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
  
}

`
const ImageTitle =styled.div`
height:30vh;
min-height:170px;
width:35vh;
min-width:200px;

img{
    width:100%;
    height:100%;
    object-fit:contain;
}

` 
const Controles = styled.div`
display: flex;
align-items: center;



`
const PlayButton= styled.div`
border-radius:4px;
// paddding:0px 24px;
margin-right:24px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgba(249,249,249,1);
color:black;
padding:24px;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
    background-color:rgb(198,198,198);
}

`

const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);  
color: rgb(249,249,249);
text-transform:uppercase;

`

const AddButton = styled.div`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items: center;
justify-content:center;
background:rgba(0,0,0,0.6);
border-radius:50%;
border:2px solid white;
cursor:pointer;
span{
    margin-top:-5px;
    font-size:30px;
}
`

const GroupButton = styled(AddButton)`
background:rgb(0,0,0);
`