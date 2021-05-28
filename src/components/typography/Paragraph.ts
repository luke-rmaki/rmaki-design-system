/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

export interface ParagraphProps {
  /**
   * Color for heading
   * */
  color: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props: ParagraphProps) =>
    `var(--${props.color})` || `var(--white)`};
  font-family: var(--font);
  font-size: var(--p);
`;
