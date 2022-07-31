import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export type LogoStylesType = Pick<LogoProps, 'pokeType'>

export const Wrapper = styled.main<LogoStylesType>`
  ${({ theme, pokeType }) => css`
    color: ${theme.colors[pokeType]};
  `}
`
