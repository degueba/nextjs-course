import { c_gray_100, c_gray_800 } from '@/styles/colors'
import styled, { css } from 'styled-components'

import {
  STATUS,
  STATUSES,
  STATUS_BADGES_BACKGROUND,
  STATUS_BADGES_COLOR,
  STATUS_BADGES_COLOR_BULLET,
} from '@/styles/statuses'

function handleColorVariation(color, variation = 'background') {
  if (STATUSES.includes(color)) color = STATUS[color]

  if (variation === 'background') {
    return STATUS_BADGES_BACKGROUND[color]
  } else if (variation === 'color') {
    return STATUS_BADGES_COLOR[color]
  } else if (variation === 'bullet') {
    return STATUS_BADGES_COLOR_BULLET[color]
  }
}

/* Common Style */
export const BadgeGeneralStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 8px;
  font-size: 14px;
  padding: 2px 12px 2px 8px;
  max-height: 24px;
  font-weight: 500;
  box-sizing: border-box;
  background: ${(props) =>
    handleColorVariation(props.statusColor || props.status) || c_gray_100};
  color: ${(props) =>
    handleColorVariation(props.statusColor || props.status, 'color') ||
    c_gray_800};

  &::before {
    display: flex;
    align-items: center;
    content: '${(props) => (!props.disableBulletPoint ? '•' : '')}';
    color: ${(props) => handleColorVariation(props.statusColor, 'bullet')};
    font-size: 1.52em;
  }
`

export const StyleBadge = styled.span`
  ${BadgeGeneralStyles};
`
