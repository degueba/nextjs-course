import {
  c_gray_100,
  c_gray_300,
  c_gray_700,
  c_gray_900,
  c_white,
} from '@/styles/colors'
import Link from 'next/link'
import styled, { css } from 'styled-components'

function ButtonSize(size) {
  switch (size) {
    case 'small':
    case 'slim':
      return '0.375em 1em'
    case 'large':
      return '0.75em 1.25em 0.75em 1.5em'
    default:
      return '0.5em 1em'
  }
}

export const ButtonGeneralStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 79px;
  min-height: 36px;
  box-sizing: border-box;
  border: none;
  background: ${c_white};
  outline: 1px solid ${c_gray_300};
  box-shadow: 0px 1px 2px rgba(48, 49, 151, 0.05);
  border-radius: 8px;
  padding: ${(props) => ButtonSize(props.size)};
  color: ${c_gray_900};
  font-style: normal;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 20px;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    outline: 2px solid ${c_gray_300};
  }

  &:active {
    background: ${c_gray_100};
  }

  &:disabled {
    opacity: 0.5;
    outline-width: 1px;
    background: ${c_white};
  }

  .icon {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`

export const StyledButtonDefault = styled.button`
  ${ButtonGeneralStyles};
`

export const StyledButtonPrimary = styled.button`
  ${ButtonGeneralStyles};

  background: ${(props) => props.theme.colors.primary};
  color: ${c_white};

  &:hover {
    background: ${(props) => props.theme.colors.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.dark};
  }
`

export const StyledButtonSlim = styled.button`
  ${ButtonGeneralStyles}
  padding: ${ButtonSize('small')};
  max-height: 32px;
`
export const StyledButtonOutlined = styled.button`
  ${ButtonGeneralStyles}
  outline-color: ${c_gray_900};

  &:hover {
    outline: 1px solid ${c_gray_900};
    background: ${c_gray_100};
  }

  &:active {
    color: ${c_white};
    background: ${c_gray_700};
  }
`
