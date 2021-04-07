import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
};

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 60px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 30px;
  max-width:  700px;
  
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError && css `
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    color: white;
    border-radius: 0 5px 5px 0;
    border: 0;
    width: 210px;
    height: 70px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  background: #c53030;
  color: #fff;
  margin-top: 8px;
  padding: 4px 6px;
  width: 255px;
  border: 4px dashed #ff0;
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }
    
    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;