import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled(AntdButton)``;
