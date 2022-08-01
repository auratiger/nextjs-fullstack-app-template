import Image from 'next/image';
import styled from 'styled-components';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="card">
          <div className="card__header">
            <Image
              src="/time-cat.jpg"
              alt="card__image"
              className="card__image"
              width="600"
              height="400"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">{tag}</span>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <Image
                src="https://i.pravatar.cc/40?img=3"
                alt="user__image"
                className="user__image"
                width="40"
                height="40"
              />
              <div className="user__info">
                <h5>{author}</h5>
                <small>{time}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin: 1rem;
  }

  .container * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .card__image {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  .card {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ece9e6;
    background: linear-gradient(to right, #ffffff, #ece9e6);
  }

  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag-blue {
    background: #56ccf2;
    background: linear-gradient(to bottom, #2f80ed, #56ccf2);
    color: #fafafa;
  }

  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }

  .user {
    display: flex;
    gap: 0.5rem;
  }

  .user__image {
    border-radius: 50%;
  }

  .user__info > small {
    color: #666;
  }
`;

export default CatCard;
