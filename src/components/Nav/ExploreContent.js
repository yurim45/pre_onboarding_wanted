import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';
import navList from './navList';

export default function ExploreContent({ bar }) {
  const leaveExploreContent = () => {
    bar.current.style.height = '0px';
    bar.current.style.opacity = 0;
    bar.current.style.transform = 'translateY(-350px)';
  };

  return (
    <Section ref={bar}>
      <ContainerWrap onMouseLeave={leaveExploreContent}>
        {navList?.map(nav => {
          return nav.id < 6 ? (
            <Container key={nav.id}>
              <p className="titleMore">
                <h2>{nav.menuName}</h2>
                <i className="fas fa-chevron-right" />
              </p>
              <ul>
                {nav.categoryList?.map(category => {
                  return (
                    <li key={category.categoryId}>
                      <h3>{category.categoryName}</h3>
                    </li>
                  );
                })}
              </ul>
              <p className="more">
                <span>더보기</span>
                <i className="fas fa-chevron-right" />
              </p>
            </Container>
          ) : (
            <TitleList>
              <p className="titleMore">
                <h2>{nav.menuName}</h2>
                <i className="fas fa-chevron-right" />
              </p>
            </TitleList>
          );
        })}
      </ContainerWrap>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  background: #fff;
  opacity: 0;
  transform: translateY(-350px);
  transition: all 400ms cubic-bezier(0.9, 0, 0.33, 1);

  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

const ContainerWrap = styled.div`
  margin: 0 auto;
  max-width: 1060px;
`;

const Container = styled.div`
  float: left;
  width: 180px;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;

  .titleMore {
    ${flexSet('space-between', 'center')};
    cursor: pointer;

    h2 {
      font-size: 17px;
      line-height: 20px;
      padding: 0 20px 15px 0;
    }

    .fa-chevron-right {
      padding-bottom: 15px;
      font-size: 10px;
    }
  }

  ul {
    li {
      cursor: pointer;
    }
  }

  h3 {
    padding: 5px 20px 5px 0;
  }

  h3,
  .more {
    position: relative;
    font-size: 13px;
    color: #999;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }

  .more {
    ${flexSet('space-between', 'center')};
    padding: 5px 0;

    .fa-chevron-right {
      font-size: 10px;
    }
  }
`;

const TitleList = styled(Container.withComponent('div'))`
  width: 160px;
  height: 10px;
  padding: 30px 0 0 0;
  cursor: pointer;

  p:nth-child(1) {
    padding-top: 10px;
  }
`;
