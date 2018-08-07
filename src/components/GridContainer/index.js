import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default styled(Grid)`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
`;

export const FullWidthRow = styled(Row)`
  max-width: 100vw;
`;

export const Column = styled(Col)`
  width: 100%;
`;
