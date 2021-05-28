/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

export interface HeadingThreeProps {
  /**
   * Color for heading
   * */
  color: string;
}

export const HeadingThree = styled.h3<HeadingThreeProps>`
  color: ${(props: HeadingThreeProps) =>
    `var(--${props.color})` || `var(--white)`};
  font-family: var(--font);
  font-size: var(--h-three);
  font-weight: medium;
  font-style: italic;
`;
