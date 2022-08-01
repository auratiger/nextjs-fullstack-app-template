import Head from 'next/head';
import styled from 'styled-components';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <Wrapper {...divProps}>
        <header className="main-header"></header>
        <main>{children}</main>
        <footer className="main-footer"></footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .main-header,
  .main-footer {
    height: 2rem;
    width: 100%;
    background: rgb(129, 156, 239);
  }

  main {
    height: calc(100vh - 4rem);
  }
`;

export default PrimaryLayout;
