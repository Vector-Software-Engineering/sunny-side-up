import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  text-align: left;
  font-family: 'Courier Prime', monospace;

  .main {
    display: grid;
    grid-template-columns: 10% 1fr 3fr 10%;  
  }

  h4 {
    background: white;
    color: black;
    font size: 1.15em;
    margin: 0;
  }
`