import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { HSLToHex } from '../functions/hsl_to_hex';
import { Hues, Saturation, Lightness } from '../../gatsby-theme-docz/Colors';

type Props = {
  color: string;
};

export const Swatch = (props: Props) => {
  const { color } = props;
  let h;
  let s;
  let l;

  switch (color) {
    case `purple`:
      h = Hues.Purple;
      s = Saturation.Purple;
      l = Lightness.Purple;
      break;
    case `black`:
      h = Hues.Black;
      s = Saturation.Black;
      l = Lightness.Black;
      break;
    case `accent`:
      h = Hues.Accent;
      s = Saturation.Accent;
      l = Lightness.Accent;
      break;
    case `white`:
      h = Hues.White;
      s = Saturation.White;
      l = Lightness.White;
      break;
    default:
      h = 0;
      s = 0;
      l = 0;
      break;
  }

  const hex = HSLToHex(h, s, l);

  const [showTooltip, setShowTooltip] = useState(false);

  function handleCopy() {
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);

    setShowTooltip(true);
  }

  return (
    <StyledSwatch color={`${h}, ${s}%, ${l}%`} showTip={showTooltip}>
      <div />
      <span>
        <input defaultValue={`hsl(${h}, ${s}, ${l})`} disabled />
        <CopyToClipboard text={`hsl(${h}, ${s}, ${l})`} onCopy={handleCopy}>
          <button type="button">
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </CopyToClipboard>
      </span>
      <span>
        <input defaultValue={`${hex}`} disabled />
        <CopyToClipboard text={`${hex}`} onCopy={handleCopy}>
          <button type="button">
            <FontAwesomeIcon icon={faClipboard} />
            <span>Copied</span>
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
    background-color: ${(props) => `hsl(${props.color})`};
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
