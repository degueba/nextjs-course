import { c_error, c_success, c_warning } from '@/styles/colors'
import styled, { css } from 'styled-components'

const STATUS = {
  success: c_success,
  warning: c_warning,
  error: c_error,
}

function handleTitleSize(size) {
  switch (size) {
    case 'small':
    case 'slim':
      return '12px'
    case 'small-medium':
      return '14px'
    case 'medium':
      return '16px'
    case 'large-medium':
      return '20px'
    case 'small-large':
      return '24px'
    case 'large':
      return '32px'
    case 'extra-large':
      return '40px'
    default:
      return '14px'
  }
}

export const TitleGeneralStyles = css`
  font-size: ${(props) => handleTitleSize(props.size)};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => STATUS[props.status] || props.color || '#000000'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin: 0;
`

export const StyleTitleH1 = styled.h1`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'extra-large')};
`

export const StyleTitleH2 = styled.h2`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'large')};
`

export const StyleTitleH3 = styled.h3`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'small-large')};
`

export const StyleTitleH4 = styled.h4`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'large-medium')};
`

export const StyleTitleH5 = styled.h5`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'medium')};
`

export const StyleTitleH6 = styled.h6`
  ${TitleGeneralStyles};
`

export const StyleTitleP = styled.p`
  ${TitleGeneralStyles};
`

export const StyleTitleSpan = styled.span`
  ${TitleGeneralStyles};
`

export const StyleTitleSmall = styled.small`
  ${TitleGeneralStyles};
  font-size: ${(props) => handleTitleSize(props.size || 'small')};
`
