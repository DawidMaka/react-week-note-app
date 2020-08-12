import styled from 'styled-components';

const Input = styled.input.attrs(() => ({
  autoComplete: 'off',
}))`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: 1px solid transparent;
  border-radius: 50px;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey400};
  }
`;

export default Input;
