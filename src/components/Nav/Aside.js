import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import Badge from '../Badge';

export default function Aside() {
  return (
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
        |
        <li>
          <a href="#">
            <span>기업 서비스</span>
          </a>
        </li>
      </ul>
    </AsideWrap>
  );
}

const AsideWrap = styled.aside`
  ${flexSet('space-between', 'center')};

  ul {
    ${flexSet('space-between', 'center')};

    li {
      height: 100%;
      padding: 0 10px;

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
    }

    li:nth-child(3) {
      padding: 0 15px 0 10px;
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
