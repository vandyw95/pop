import styled from 'styled-components';
import { Card as AntdCard, Button as AntdButton } from 'antd';

function getZ({ isOnTop = false }) {
  return `z-index: ${isOnTop ? 10 : 1};`;
}

export const Card = styled(({ isOnTop, ...antdProps }) => (
  <AntdCard {...antdProps} />
))`
  ${getZ}
  width: 300px;
  left: calc(50% - 150px);
  top: calc(50% - 315px);
  position: absolute;
  &div,
  .ant-card-body {
    padding: 0 !important;
  }
  &div,
  .ant-card-actions {
    cursor: default;
  }
  @media (min-width: 450px) {
    width: 400px;
    left: calc(50% - 200px);
    top: calc(50% - 300px);
  }
`;

export const CardImage = styled.img`
  height: 500px;
  width: 300px;
  object-fit: contain;
  object-position: center;
  background-color: aliceblue;
  @media (min-width: 450px) {
    height: 400px;
    width: 400px;
  }
`;

export const CardIconButton = styled(AntdButton).attrs({ shape: 'circle' })`
  width: 50px;
  height: 50px;
  font-size: 24px;
`;

export const CardMeta = styled(AntdCard.Meta)`
  height: 100px;
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
  overflow: hidden;
  @media (min-width: 450px) {
    padding: 24px;
    height: 185px;
  }
`;
