/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

export interface HeadingOneProps {
  /**
   * Color for heading
   * */
  color: string;
}

export const HeadingOne = styled.h1<HeadingOneProps>`
  color: ${(props: HeadingOneProps) =>
    `var(--${props.color})` || `var(--white)`};
  font-family: var(--font);
  font-size: var(--h-one);
  font-weight: bold;
`;
