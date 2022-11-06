import CatCard from '@components/cards/cat/CatCard';
import { mockCatCardProps } from '@components/cards/cat/CatCard.mocks';
import PrimaryLayout from '@components/layouts/primary/PrimaryLayout';
import styled from 'styled-components';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
   return (
      <Wrapper>
         <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
         </h1>
         <CatCard {...mockCatCardProps.base} />
      </Wrapper>
   );
};

export default Home;

Home.getLayout = (page) => {
   return <PrimaryLayout>{page}</PrimaryLayout>;
};

const Wrapper = styled.section`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .title a {
      color: #0070f3;
      text-decoration: none;
   }

   .title a:hover,
   .title a:focus,
   .title a:active {
      text-decoration: underline;
   }

   .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
   }

   .title,
   .description {
      text-align: center;
   }
`;
