import styled, { css } from 'styled-components'
import { PokeTypes } from 'utils/pokeTypes'

export type progressStyleType = {
  progress?: string
} & Pick<PokeTypes, 'pokeType'>

export const TitleBar = styled.h3`
  font-size: 12px;
  width: 90px;
`
export const ValueBar = styled.p`
  font-size: 14px;
  margin-right: 5px;
  color: #212121;
`

export const ProgressBox = styled.div<progressStyleType>`
  ${({ theme, pokeType }) => css`
    width: 100%;
    border: 1px solid ${theme.colors[pokeType]};
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    span {
      background: ${theme.colors[pokeType]};
      opacity: 0.2;
      width: 100%;
      z-index: 1;
      position: absolute;
      height: 100%;
      top: 0;
    }
  `}
`
export const ProgressBar = styled.div<progressStyleType>`
  ${({ theme, progress, pokeType }) => css`
    width: ${progress};
    height: 15px;
    background: ${theme.colors[pokeType]};
    z-index: 2;
  `}
`

export const Wrapper = styled.main`
  display: flex;
  height: 30px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  hr {
    width: 2px;
    border: none;
    background: #e0e0e0;
    height: 100%;
    margin: 0 10px;
  }
`
