import React from 'react';
import styled from 'styled-components';

export default function Badge() {
  return (
    <>
      <BadgeWrap className="badge">N</BadgeWrap>
    </>
  );
}

const BadgeWrap = styled.span`
  display: inline-block;
  position: relative;
  top: -10px;
  right: 8px;
  width: 13px;
  padding: 2px;
  background-color: ${({ theme }) => theme.newBlue};
  color: #fff;
  font-size: 9px;
  text-align: center;
  line-height: 1;
  border-radius: 5px;
`;
