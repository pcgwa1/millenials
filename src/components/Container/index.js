import styled from 'styled-components';

export default styled.div`
  padding: 0 1em;
  margin: 0 auto;
  ${props => props.theme.breakpoints.tablet} {
    max-width: 960px;
  }
  ${props => props.theme.breakpoints.desktop} {
    display: block;
    max-width: 1231px;
  }
  ${props => props.theme.breakpoints.XLargeDesktop} {
    max-width: 1560px;
  }
`;