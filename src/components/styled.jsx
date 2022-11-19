import styled from 'styled-components';
import { ThemeProvider } from "styled-components";



const Button = styled.button`
  display:inline-block;
  background-color: navy;
  height: 70px;
  width: auto;
  padding:0.3em 1.2em;
  margin:0 0.1em 0.1em 0;
  border:0.16em solid rgba(255,255,255,0);
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align:center;
  transition: all 0.2s;
  }
  &: hover{
  border-color: purple;
  background-color: purple;
  cursor: grab;
}
}
`;
const RoundImage = styled.div`
  border-radius: 50%;
  background-color: green;
  background-image: url(${props => props.img});
  background-position: center;
  background-size:cover;
    margin: 10px;
    height: 350px;
    width: 350px;
  object-fit: cover;
`;

const MediaQueryEx = styled.div`
  border: solid 5px pink;
  background-color: pink;
  color: black;
  display: flex;
  font-size: 2em;
  text-align: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 20px;
  &: hover{
    border-color: purple;
    background-color: purple;
    cursor: grab;
  }
  @media (max-width: 700px) {
    background-color: blue;
    color: white;
}
`;


const StyleDiv = styled.div`
  width: 300px;
  height: 300px;
  color: white;
  display: flex;
  font-size: 2em;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: 20px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  background-color: rebeccapurple;
  svg {
    fill: black;
    stroke: white;
    stroke-width: 10px;
    font-size: 2em;
  }
}`

export { MediaQueryEx, RoundImage, StyleDiv, Button };