import styled, { css } from 'styled-components'
import { LogoProps } from '.'
import media from 'styled-media-query'

export type LogoStylesType = Pick<
  LogoProps,
  'pokeType' | 'size' | 'hideOnMobile'
>

const wrapperModifier = {
  normal: () => css`
    width: 200px;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 52px;
      svg {
        height: 52px;
        width: 52px;
        pointer-events: none;
      }
      .text {
        display: none
      }
    `}
  `
}

export const Wrapper = styled.main<LogoStylesType>`
  ${({ theme, pokeType = 'grass', size, hideOnMobile }) => css`
    color: ${theme.colors[pokeType]};

    ${!!size && wrapperModifier[size]}
    ${!!hideOnMobile && wrapperModifier.hideOnMobile}
  `}
`
