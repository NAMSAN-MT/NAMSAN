import { size } from '@Styles/mixin.style';
import { defaultColors } from '@Styles/varialbes.style';
import styled from 'styled-components';

const DividerWrapper = styled.div`
  ${size('1px', '100%')};
  height: 1px;
  background-color: ${defaultColors.grey200};
`;

export { DividerWrapper };
