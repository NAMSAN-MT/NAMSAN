import { font, lineHeight } from '@Styles/mixin.style';
import styled from 'styled-components';

const MembersTitle = styled.h1`
  ${font('display40', 'bold')}
  ${lineHeight(40, 60)}
  margin-bottom: 48px;
`;

export { MembersTitle };