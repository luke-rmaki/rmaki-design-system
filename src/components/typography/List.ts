import styled from 'styled-components';

export interface ListProps {
  /**
   * Color for heading
   * */
  color: string;
}

export const List = styled.ul<ListProps>`
  font-family: var(--font);
  font-size: var(--p);
  list-style-type: none;

  li {
    ::before {
      content: '=> ';
    }

    ul {
      list-style-type: none;

      li {
        ::before {
          content: '-> ';
        }
      }
    }
  }
`;
