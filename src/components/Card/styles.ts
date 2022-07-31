import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { CardProps } from '.'

export type StylesCardTypes = Pick<CardProps, 'pokeType'>

export const Wrapper = styled.div<StylesCardTypes>`
  ${({ theme, pokeType }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding: 0;
    width: 170px;
    height: 180px;
    border: 1px solid ${theme.colors[pokeType]};
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    ${media.lessThan('medium')`
    width: 100%;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 5px;
`
export const Base = styled.div<StylesCardTypes>`
  ${({ theme, pokeType }) => css`
    background: ${theme.colors[pokeType]};
    width: 100%;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Tag = styled.p<StylesCardTypes>`
  ${({ theme, pokeType }) => css`
    color: ${theme.colors[pokeType]};
    font-size: ${theme.font.sizes.small};
    align-self: end;
  `}
`
export const Image = styled.img`
  ${() => css`
    width: 80px;
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    ${media.lessThan('medium')`
      font-size: 12px;
    `}
  `}
`
