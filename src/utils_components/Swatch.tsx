import React from 'react';
import styled from 'styled-components';

import { hex_converter } from '../utils/hex_converter';

type Props = {
  hex: string;
};

export const Swatch = (props: Props) => {
  const { hex }: { hex: string } = props;
  return (
    <StyledSwatch color={hex}>
      <div />
      <p>{hex}</p>
      <p>{hex_converter(hex)}</p>
    </StyledSwatch>
  );
};

const StyledSwatch = styled.li`
  text-align: center;
  div {
    background-color: ${(props) => props.color};
    height: 100px;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
  }
`;
