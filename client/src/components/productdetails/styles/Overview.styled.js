import styled from 'styled-components';

export const StyledOverview = styled.div`
  margin-left: 140px;

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
  }
`;

export const StyledOverviewHeader = styled.header`
  display: block;
  background: transparent;
  height: 50%;
  margin: 225px auto 45px;
  position: relative;
  text-align: center;
  width: 100%;
  text-align: center;
`;

export const StyledSidebar = styled.div`
  height: 100%;
  width: 140px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FFF;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 1000px) 2fr 1fr;
  grid-template-rows: 4fr 2fr;
  border: 2px white;
`;

export const MainImageBox = styled.div`
  grid-column: 0;
  grid-row: 0;
  height: 500;
  width: auto;
  border: 2px white;
  overflow: hidden;
`;

export const StyledProductInfo = styled.div`
  grid-column: auto;
  grid-row: auto;
  border: 2px white;
  margin-left: 20px;
`;

export const InformationBox = styled.div`
  border: 2px white;
`;
