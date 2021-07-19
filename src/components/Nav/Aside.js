import React, { useRef } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import Badge from '../Badge';

export default function Aside() {
  const asideMenu = useRef();

  const openMenu = () => {
    asideMenu.current.style.display = 'block';
  };

  const closeMenu = () => {
    asideMenu.current.style.display = 'none';
  };

  return (
    <>
      <AsideWrap>
        <ul>
          <li>
            <button>
              <i className="fas fa-search" />
            </button>
          </li>
          <li>
            <button>
              <i className="far fa-bell" />
            </button>
            <Badge />
          </li>
          <li>
            <button>
              <i className="far fa-user" />
            </button>
          </li>
          <span className="bar">|</span>
          <li>
            <a href="#">
              <span>기업 서비스</span>
            </a>
          </li>
          <li onClick={openMenu}>
            <i className="fas fa-bars" />
          </li>
        </ul>
      </AsideWrap>
      <AsideMenu ref={asideMenu}>
        <div className="wrap">
          <div className="mobileLogo">
            <span />
            <span />
            <span />
          </div>
          <i className="fas fa-times" onClick={closeMenu} />
        </div>
        <Menu>
          <ul>
            <li className="mobileUser">
              MY 원티드 <i className="far fa-user" />
            </li>
            <li>프로필</li>
          </ul>
          <ul>
            {ASIDE_LIST.map(el => {
              return <li key={el.id}>{el.name}</li>;
            })}
          </ul>
          <ul>
            {ASIDE_LIST2.map(el => {
              return <li key={el.id}>{el.name}</li>;
            })}
          </ul>
          <ul>
            {LOGIN_INFO.map(el => {
              return <li key={el.id}>{el.name}</li>;
            })}
          </ul>
        </Menu>
      </AsideMenu>
    </>
  );
}

const ASIDE_LIST = [
  { id: 1, name: '이력서' },
  { id: 2, name: '매치업' },
  { id: 3, name: '추천' },
  { id: 4, name: '지원 현황' },
  { id: 5, name: '프리랜서' },
];

const ASIDE_LIST2 = [
  { id: 1, name: '직군별 연봉' },
  { id: 2, name: '커리어 성장' },
];

const LOGIN_INFO = [
  { id: 1, name: '기업 서비스' },
  { id: 2, name: '로그아웃' },
];

const AsideWrap = styled.aside`
  ${flexSet('space-between', 'center')};

  ul {
    ${flexSet('space-between', 'center')};

    li {
      height: 100%;
      padding: 0 10px;

      @media ${({ theme }) => theme.mobile} {
        padding: 0 5px;
      }

      button {
        width: 28px;
        height: 28px;

        i {
          font-size: 16px;
        }
      }
    }

    li:nth-child(2) {
      padding: 0 0 0 10px;

      @media ${({ theme }) => theme.mobile} {
        padding: 0 0 0 5px;
      }
    }

    li:nth-child(3) {
      padding: 0 15px 0 10px;

      @media ${({ theme }) => theme.mobile} {
        display: none;
      }
    }

    span.bar,
    li:nth-child(5) {
      @media ${({ theme }) => theme.mobile} {
        display: none;
      }
    }

    li:nth-child(6) {
      display: none;

      @media ${({ theme }) => theme.mobile} {
        display: block;
      }
    }
  }

  a {
    font-size: 13px;
    color: #666;
    border: 1px solid #e1e2e3;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 0 0 0 15px;
  }
`;

const AsideMenu = styled.div`
  display: none;

  @media ${({ theme }) => theme.mobile} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background: #fff;

    .wrap {
      position: absolute;
      height: 50px;
      margin: 0;

      .mobileLogo {
        span {
          position: absolute;
          width: 24px;
          height: 24px;
          top: 15px;
          border-radius: 50%;
        }

        span:nth-child(1) {
          left: 0;
          background: rgba(36, 224, 166, 0.8);
        }

        span:nth-child(2) {
          left: 18px;
          background: rgba(67, 139, 255, 0.8);
        }

        span:nth-child(3) {
          left: 36px;
          background: rgba(44, 91, 242, 0.9);
        }
      }

      .fa-times {
        color: ${({ theme }) => theme.fontGrey};
        font-size: 1.5rem;
      }
    }
  }
`;

const Menu = styled.div`
  position: relative;
  top: 80px;

  ul {
    padding: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderLine};

    .mobileUser {
      ${flexSet('space-between', 'center')};

      .fa-user {
        font-size: 30px;
        margin-right: 10px;
      }
    }

    li {
      padding: 15px 0;
      font-size: 20px;
      font-weight: 500;
    }
  }

  ul:last-child {
    border-bottom: none;
  }
`;
