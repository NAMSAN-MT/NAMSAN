import { WrappedComponentProps, injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { IMemberItemProps } from './MemberItem.interface';
import * as S from './MemberItem.style';
import { GatsbyImage } from 'gatsby-plugin-image';

const MemberItem = ({
  name,
  position,
  businessFields,
  image,
  id,
  order,
  intl,
}: IMemberItemProps & WrappedComponentProps) => {
  const _handleClick = async () => {
    window.location.href = `/${intl.locale}/member/${order}`;
  };

  return (
    <S.MemberItemWrapper onClick={_handleClick}>
      <S.ImageSection>
        <S.ImageWrapper>
          <div className="dim"></div>
          <GatsbyImage alt={order!} image={image!} />
        </S.ImageWrapper>
        <S.TagsWrapper isScrollable={intl.locale !== 'ko'}>
          {businessFields!.map(businessField => (
            <S.Tag key={businessField}>{businessField}</S.Tag>
          ))}
        </S.TagsWrapper>
      </S.ImageSection>
      <S.TextSection>
        <S.Name>{name}</S.Name>
        <S.Position>{position}</S.Position>
      </S.TextSection>
    </S.MemberItemWrapper>
  );
};

export default injectIntl(MemberItem);
