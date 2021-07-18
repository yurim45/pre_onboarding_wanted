import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import Logo from '../Logo';
import Aside from '../Nav/Aside';
import ExploreContent from './ExploreContent';

export default function Nav() {
  const [currentId, setCurrentId] = useState(0);
  const bar = useRef();

  const overExploreContent = () => {
    bar.current.style.height = '350px';
    bar.current.style.opacity = 1;
    bar.current.style.transform = 'translateY(50px)';
  };

  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <>
      <Header>
        <div className="wrap">
          <Logo clickHandler={clickHandler} />
          <NavWrap>
            <ul>
              {HEADER_LIST?.map((el, idx) => {
                return el.id === 1 ? (
                  el.id === currentId ? (
                    <li
                      key={el.id}
                      onMouseOver={overExploreContent}
                      onClick={() => clickHandler(idx + 1)}
                      className="selected"
                    >
                      {el.name}
                    </li>
                  ) : (
                    <li onClick={() => clickHandler(idx + 1)}>{el.name}</li>
                  )
                ) : el.id === currentId ? (
                  <li
                    key={el.id}
                    onClick={() => clickHandler(idx + 1)}
                    className="selected"
                  >
                    {el.name}
                  </li>
                ) : (
                  <li onClick={() => clickHandler(idx + 1)}>{el.name}</li>
                );
              })}
            </ul>
          </NavWrap>
          <Aside />
        </div>
      </Header>
      <ExploreContent bar={bar} />
    </>
  );
}

const HEADER_LIST = [
  { id: 1, name: '탐색' },
  { id: 2, name: '커리어 성장' },
  { id: 3, name: '직군별 연봉' },
  { id: 4, name: '이력서' },
  { id: 5, name: '매치업' },
  { id: 6, name: '프리랜서' },
];

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  color: ${({ theme }) => theme.fontGrey};
  z-index: 100;

  div.wrap {
    ${flexSet('space-between', 'center')};
    width: 88%;
    margin: auto;
  }
`;

const NavWrap = styled.nav`
  ${flexSet('space-between', 'center')};

  ul {
    ${flexSet('space-between', 'center')};

    li {
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      padding: 15px;
      cursor: pointer;

      :hover {
        border-bottom: 2px solid ${({ theme }) => theme.borderLine};
      }
    }

    .selected {
      border-bottom: 2px solid ${({ theme }) => theme.newBlue};
    }
  }
`;
