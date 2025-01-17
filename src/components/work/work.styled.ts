import { font, mediaQuery, size } from '@Styles/mixin.style';
import styled from 'styled-components';
import * as S from '@Components/members/MemberItem/MemberItem.style';

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-row-gap: 76px;
  grid-column-gap: 24px;

  ${mediaQuery(
    'pc1380',
    `
    grid-template-columns: repeat(2, 1fr);
      `,
  )}

  ${mediaQuery(
    'pc1380',
    `
    grid-row-gap: 52px;
    `,
  )}


  ${mediaQuery(
    'mobile',
    `
    grid-template-columns: repeat(1, 1fr);
    row-gap: 16px;
      `,
  )}
`;

export const Title = styled.h1`
  color: ${theme => theme.theme.color.textBlackHigh};
  margin-bottom: 24px;
  ${font('title32', 'bold')};

  letter-spacing: -0.4px;
  &:not():first-child:hover {
    color: ${theme => theme.theme.color.textBlue};
  }

  ${mediaQuery(
    'mobile',
    `
    margin-bottom: 16px;
    ${font('mobile24', 'bold')}
    margin-bottom: 16px;

    letter-spacing: -0.2px;
      `,
  )}
`;

export const LineArrowIconInner = styled.div`
  cursor: pointer;
  scale: 1.5;

  ${mediaQuery(
    'mobile',
    `

  scale: 1.1;
      `,
  )}
`;

export const SubTitle = styled.h2`
  ${font('title26', 'bold')}

  ${mediaQuery(
    'mobile',
    `
    line-height: 26px;
    ${font('mobile18', 'bold')};
    overflow: unset;
    white-space: unset;
    text-overflow: unset;
    padding-right: 12px;
    letter-spacing: -0.2px;
      `,
  )}
`;

export const Contents = styled.p`
  color: ${theme => theme.theme.color.textBlackMedium};
  ${font('title22', 'regular')};
  margin-bottom: 32px;
  line-height: 36px;
  letter-spacing: -0.4px;

  ${mediaQuery(
    'mobile',
    `
    line-height: 26px;
    ${font('mobile16', 'regular')};
    letter-spacing: -0.2px;
    margin-bottom: 24px;
      `,
  )}
`;

export const Box = styled.div`
  /* border-top: 1px solid ${({ theme }) => theme.color.dividerGrey200}; */
  /* border-bottom: 1px solid ${({ theme }) => theme.color.dividerGrey200}; */

  ${mediaQuery(
    'mobile',
    `
    & > p {
      line-height: 22px;
      ${font('mobile14', 'regular')}
    }
      `,
  )}
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${theme => theme.theme.color.textBlackHigh};
  cursor: pointer;
  /* height: 104px; */

  &:hover {
    color: ${theme => theme.theme.color.textBlue};
  }

  & > ${SubTitle} {
    padding: 32px 0px;
    ${mediaQuery(
      'mobile',
      `
      padding: 24px 0px;
    `,
    )}
  }

  ${mediaQuery(
    'mobile',
    `
    // height: 74px;
  `,
  )}
`;

export const Layout = styled.div`
  padding: 0px 102px;
  margin: 107px auto 160px auto;
  max-width: 1200px;

  ${mediaQuery(
    'tablet1024',
    `
    margin-top: 60px;
    padding: 0px 40px;
  `,
  )}

  ${mediaQuery(
    'mobile',
    `
    padding: 0px 24px;
    margin-top: 99px;
    margin-bottom: 100px;
  `,
  )}
`;

export const MemberBox = styled.div`
  margin-top: 80px;

  &:last-of-type {
    margin-top: 60px;
  }
  ${mediaQuery(
    'tablet1024',
    `
    margin-top: 62px;
  `,
  )}

  ${mediaQuery(
    'mobile',
    `margin-top: 20px;  


    &:last-of-type {
      margin-top: 44px;
    }
  `,
  )}
`;

export const CategoryBox = styled.div`
  padding-bottom: 12px;

  ${mediaQuery(
    'tablet1024',
    `
    padding-bottom: 24px;
  `,
  )}
`;

export const MemberList = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  justify-content: space-evenly;
  align-items: start;
  margin-top: 32px;
  grid-column-gap: 24px;
  column-gap: 24px;
  row-gap: 24px;

  ${mediaQuery(
    'tablet1024',
    `grid-template-columns: repeat(3, 1fr);
    row-gap: 36px;
      `,
  )}
  ${mediaQuery(
    'mobile',
    `grid-template-columns: repeat(2, 1fr);
    gap: 24px 20px;
    margin-top: 24px;
      `,
  )}

  & > li {
    width: 100%;
    margin-bottom: 0px;
    height: auto;
    & > ${S.ImageSection}:hover {
      ${S.TagsWrapper} {
        display: none;
      }
      .dim {
        display: none;
      }
    }

    & > ${S.ImageSection} {
      height: 100%;
      & > ${S.ImageWrapper} {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    & > ${S.TextSection} {
      & > ${S.Name} {
        margin-top: 16px;
        ${font('title20', 'bold')}

        ${mediaQuery(
          'mobile',
          `margin-top: 10px;
          font-size: 16px;
          font-weight: 700;
          line-height: 26px;
      `,
        )}
      }
      & > ${S.Position} {
        ${font('title18', 'regular')}
        letter-spacing: -0.2px;

        ${mediaQuery(
          'mobile',
          `font-size: 14px;
          line-height: 22px;`,
        )}
      }
    }

    ${mediaQuery(
      'mobile',
      `
      width: auto; 
      min-width: 154px;`,
    )}
    img {
      width: inherit;
      object-fit: scale-down;
      object-position: bottom;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
`;
export const ImageContainer = styled.div`
  overflow: hidden;
  & > div {
    ${size('300px', '100%')}
    margin-top: 8px;
    margin-bottom: 74px;

    object-fit: cover;
    vertical-align: middle;

    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);

    ${mediaQuery(
      'tablet1024',
      `
    `,
    )}
    ${mediaQuery(
      'mobile',
      `
    ${size('160px', '100%')}
    margin-top: 8px;
    margin-bottom: 32px;`,
    )}
  }
`;

export const Image = styled.img`
  ${size('300px', '100%')}
  margin-top: 8px;
  margin-bottom: 74px;

  object-fit: cover;
  vertical-align: middle;

  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);

  ${mediaQuery(
    'tablet1024',
    `
    `,
  )}
  ${mediaQuery(
    'mobile',
    `
    ${size('160px', '100%')}
    margin-top: 8px;
    margin-bottom: 20px;`,
  )}
`;

export const ButtonWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-around;

  ${mediaQuery(
    'mobile',
    `
  margin-top: 24px;`,
  )}
`;

export const Anchor = styled.span`
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
`;
