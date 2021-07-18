import React from 'react';
import styled from 'styled-components';

export default function Logo({ clickHandler }) {
  return (
    <LogoWrap onClick={() => clickHandler(0)}>
      <a href="#">
        <img alt="logo" src="/images/logo.png" />
      </a>
    </LogoWrap>
  );
}

const LogoWrap = styled.span`
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;
