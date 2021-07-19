import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <Logo clickHandler={clickHandler} currentId={currentId} />
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
                    <li
                      onMouseOver={overExploreContent}
                      onClick={() => clickHandler(idx + 1)}
                    >
                      {el.name}
                    </li>
                  )
                ) : el.id === currentId ? (
                  <li
                    key={el.id}
                    onClick={() => clickHandler(idx + 1)}
                    className="selected"
                  >
                    <Link to={el.path}>{el.name}</Link>
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
  { id: 2, name: '커리어 성장', path: '/events' },
  { id: 3, name: '직군별 연봉', path: '/salary' },
  { id: 4, name: '이력서', path: '/cv' },
  { id: 5, name: '매치업', path: '/profile/matching' },
  { id: 6, name: '프리랜서', path: '/gigs/experts' },
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

    @media ${({ theme }) => theme.mobile} {
      height: 52px;
    }
  }
`;

const NavWrap = styled.nav`
  ${flexSet('space-between', 'center')};

  @media ${({ theme }) => theme.mobile} {
    position: absolute;
    left: 50px;
  }

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

      @media ${({ theme }) => theme.mobile} {
        padding: 15px 10px;
      }
    }

    .selected {
      border-bottom: 2px solid ${({ theme }) => theme.newBlue};
    }

    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6) {
      @media ${({ theme }) => theme.mobile} {
        display: none;
      }
    }
  }
`;
