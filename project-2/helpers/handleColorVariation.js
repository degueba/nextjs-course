import {
  STATUS,
  STATUSES,
  STATUS_BADGES_BACKGROUND,
  STATUS_BADGES_COLOR,
  STATUS_BADGES_COLOR_BULLET,
} from '@/styles/statuses'

export function handleColorVariation(color, variation = 'background') {
  if (STATUSES.includes(color)) color = STATUS[color]

  if (variation === 'background') {
    return STATUS_BADGES_BACKGROUND[color]
  } else if (variation === 'color') {
    return STATUS_BADGES_COLOR[color]
  } else if (variation === 'bullet') {
    return STATUS_BADGES_COLOR_BULLET[color]
  }
}
