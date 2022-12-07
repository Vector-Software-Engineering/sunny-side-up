import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  text-align: left;
  font-family: 'Courier Prime', monospace;
  font-size: 12px;

  .main {
    display: grid;
    grid-template-columns: 20% 1fr 3fr 20%;  
  }

  h4 {
    background: white;
    color: black;
    font size: 1.15em;
    margin: 0;
  }

  .pointer {
    cursor: pointer;
    padding: 2px 2px 2px 0;
    display: inline-block;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  .pointer-on {
    background-color: black;
    color: white;
  }
`