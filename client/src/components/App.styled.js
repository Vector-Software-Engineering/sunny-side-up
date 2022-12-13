import styled from "styled-components";

export const AppDiv = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  font-family: 'Courier Prime', monospace;

  .page {
    display: grid;
    grid-template-columns: 140px 1fr;
  }

  .side-bar {
    grid-column: 1;
    overflow-y: auto;
    max-height: 80vh;
  }

  .main {
    grid-column: 2;
  }

  h1 {
    text-align: center;
    margin-bottom: 5px;
  }

  .center-bar {
    text-align: center;
    margin-bottom: 10px;
  }

  center-bar span {
    display: inline-block;
  }

  .pointer {
    cursor: pointer;
    padding: 2px 2px 2px 0;
    display: inline-block;
    font-size: 12px;
    margin: 0;
    line-height: 1.1;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  .pointer-on {
    background-color: black;
    color: white;
  }
`;
