import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Logo({ clickHandler, currentId }) {
  return (
    <LogoWrap onClick={() => clickHandler(0)}>
      {currentId === 0 ? (
        <Selected>
          <span className="line" />홈
        </Selected>
      ) : (
        <Link to="/" className="none">
          홈
        </Link>
      )}
      <Link to="/" className="logo">
        <img alt="logo" src="/images/logo.png" />
      </Link>
    </LogoWrap>
  );
}

const LogoWrap = styled.span`
  a {
    display: none;

    @media ${({ theme }) => theme.mobile} {
      display: block;
      padding: 15px 0;
      font-size: 14px;
    }
  }

  a.logo {
    display: block;

    @media ${({ theme }) => theme.mobile} {
      display: none;
    }
  }
`;

const Selected = styled(Link)`
  display: none;

  span.line {
    position: absolute;
    top: 50px;
    left: 0;
    width: 50px;
    border-bottom: 2px solid ${({ theme }) => theme.newBlue};
  }
`;
