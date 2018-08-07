import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  bottom: 0;
  font: 1.2em Helvetica, arial, sans-serif;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "header"
          "nav"
          "content"
          "footer";
          
  ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
            "header "
            "content"
            "content "
            "footer ";

  } 
`;

export const HeaderWrapper = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 80px;
  background: rgba(0,0,0,0.5);
  color: white;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.17);
  padding: 0 18px;
  
    ${props => props.theme.breakpoints.maxTablet} {
        flex-direction: column;
  }
`;

export const Navbar = styled.nav`
   grid-area: nav;
   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.17);
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  ${props => props.theme.breakpoints.tablet} {
    > ul {
        flex-direction: column;
    }
  }
`;

export const Content = styled.article`
   grid-area: content;
   padding: 0 0;
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Sidebar = styled.aside`
   grid-area: sidebar;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Advert = styled.div`
   grid-area: ad;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Footer = styled.footer`
   left: 0;
   right: 0;
   bottom: 0;
   background: black;
   height: 40px;
   padding: 18px;
   color: #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
   border-top: 1px solid grey;
   position: absolute;
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;
