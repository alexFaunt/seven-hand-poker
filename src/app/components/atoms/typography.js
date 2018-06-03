import styled from 'styled-components';

export const Header = styled.span`
  font-size: ${({ theme }) => theme.font.size.header};
  margin: 0;
  color: red;
`;

export const PageHeader = Header.withComponent('h1');
