import styled from 'styled-components';

const Button = styled.button`
  height: 47px;
  border: 0;
  border-radius: 50px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

export default Button;
