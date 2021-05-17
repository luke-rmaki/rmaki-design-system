import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { hex_converter } from '../functions/hex_converter';

type Props = {
  hex: string;
};

export const Swatch = (props: Props) => {
  const { hex }: { hex: string } = props;

  const rgb = hex_converter(`#${hex}`);

  const [showTooltip, setShowTooltip] = useState(false);

  function handleCopy() {
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);

    setShowTooltip(true);
  }

  return (
    <StyledSwatch color={hex} showTip={showTooltip}>
      <div />
      <span>
        <input defaultValue={`#${hex}`} disabled />
        <CopyToClipboard text={`#${hex}`} onCopy={handleCopy}>
          <button type="button">
            <FontAwesomeIcon icon={faClipboard} />
            <span>Copied</span>
          </button>
        </CopyToClipboard>
      </span>
      <span>
        <input defaultValue={`${rgb}`} disabled />
        <CopyToClipboard text={`${rgb}`} onCopy={handleCopy}>
          <button type="button">
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </CopyToClipboard>
      </span>
    </StyledSwatch>
  );
};

type StyledProps = {
  color: string;
  showTip: boolean;
};

const StyledSwatch = styled.li<StyledProps>`
  text-align: center;
  margin-bottom: 50px;

  div {
    background-color: #${(props) => props.color};
    height: 100px;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
  }

  span {
    display: flex;
    width: 100%;
    margin-top: 10px;
    height: 25px;

    input {
      flex: 1 0;
      text-align: center;
      border: none;
      border-radius: 5px 0 0 5px;
    }

    button {
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      width: 20px;
      position: relative;

      span {
        position: absolute;
        background-color: #fff;
        bottom: 120%;
        width: 50px;
        left: -25px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        transition: all 0.5s ease-in;
        opacity: ${(props) => (props.showTip ? 1 : 0)};
        transform: translateY(${(props) => (props.showTip ? `0px` : `10px`)});
      }
    }
  }
`;
