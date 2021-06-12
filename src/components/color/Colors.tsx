import React from 'react';
import styled from 'styled-components';

import { collateColors } from '../../utils/collateColors';
import { Swatch } from './Swatch';
import { SwatchCollection } from './SwatchCollection';

export const Colors = () => {
  const colors = collateColors();
  return (
    <StyledColors>
      <SwatchCollection>
        {colors.map((color) => (
          <Swatch key={color} color={color} />
        ))}
      </SwatchCollection>
    </StyledColors>
  );
};

const StyledColors = styled.main``;
