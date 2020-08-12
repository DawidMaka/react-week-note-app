import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;
  display: block;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-image: url(${({ icon }) => icon});
  background-size: 37%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export default ButtonIcon;
