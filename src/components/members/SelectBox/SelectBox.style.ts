import { flex, font } from '@Styles/mixin.style';
import { size } from 'lodash';
import styled from 'styled-components';
import { ISelectBoxOption } from './SelectBox.interface';

const OPTION_HEIGHT = '60px';

const Base = styled.div`
  height: 60px;
  width: 100%;
  ${flex('flex-start', 'center')};

  & > span {
    margin-left: 12px;
    ${font('title18', 'medium')}
    letter-spacing: -0.4px;
  }
`;

const Select = styled(Base)`
  border: none;
  cursor: pointer;
  position: relative;

  & > span {
    font-weight: 400;
  }
`;

const OptionWrapper = styled.ul`
  position: absolute;
  top: ${OPTION_HEIGHT};
  border: ${({ theme }) => `solid 2px ${theme.color.blue100}`};
  width: 100%;
  max-height: 444px;
  overflow-y: scroll;
`;

const Option = styled(Base)<Pick<ISelectBoxOption, 'isSelected'>>`
  cursor: pointer;

  & > span {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.blue100 : theme.color.black};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey100};
  }
`;

const OpenIconWrapper = styled.div`
  position: absolute;
  ${size({ width: '24px', height: '24px' })};
  top: 50%;
  transform: translateY(-50%);
  right: 19px;
`;

export { Select, OptionWrapper, Option, OpenIconWrapper };