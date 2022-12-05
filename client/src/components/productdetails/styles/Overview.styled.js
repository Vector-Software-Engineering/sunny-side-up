import styled from 'styled-components';

export const StyledOverview = styled.div`
  margin-left: 140px;

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
  }
`

export const StyledOverviewHeader = styled.header`
  display: block;
  background: transparent;
  height: 50%;
  margin: 225px auto 45px;
  position: relative;
  text-align: center;
  width: 100%;
  text-align: center;
`

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
`

export const MainImageBox = styled.div`
  display: flex;
  top-margin: -100px;
  width: 330px;
`
export const InformationBox = styled.div`
  display: inline-block;
  width: 400px;
`
export const StyledFooter = styled.div`
  display: block;
  height: 200px;
  width: 100%;
  bottom: 0px;
`