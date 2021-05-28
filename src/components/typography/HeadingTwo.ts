/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

export interface HeadingTwoProps {
  /**
   * Color for heading
   * */
  color: string;
}

export const HeadingTwo = styled.h2<HeadingTwoProps>`
  color: ${(props: HeadingTwoProps) =>
    `var(--${props.color})` || `var(--white)`};
  font-family: var(--font);
  font-size: var(--h-two);
  font-weight: bold;
`;
