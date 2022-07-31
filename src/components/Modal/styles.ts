import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { modalProps } from '.'

export type ModalStylesProps = Pick<modalProps, 'open' | 'closeModal'>
export type ModalSpanStylesType = Pick<modalProps, 'pokeType'>

export const TitleName = styled.h2``
export const Tag = styled.p``

export const BoxImage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: -100px;
`
export const Image = styled.img`
  width: 280px;
`

export const BoxTypes = styled.div`
  display: flex;
  justify-content: center;
`
export const TypesBtn = styled.span<ModalSpanStylesType>`
  ${({ theme, pokeType }) => css`
    background: ${theme.colors[pokeType]};
    margin: 3px 13px;
    margin-top: 10px;
    padding: 5px 25px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 700px;
    color: white;
  `}
`

export const AbilitiesTitle = styled.h2<ModalSpanStylesType>`
  ${({ theme, pokeType }) => css`
    font-size: 24px;
    text-transform: uppercase;
    color: ${theme.colors[pokeType]};
    font-weight: 700;
    text-align: center;
    margin: 10px 0;
  `}
`

export const AbilitiesBx = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
`

export const AbilitiesBtn = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.darkGray};
    margin: 3px 13px;
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 700px;
    color: white;
  `}
`

export const HeaderContent = styled.div<modalProps>`
  ${({ theme, pokeType }) => css`
    background: ${theme.colors[pokeType]};
    width: 100%;
    height: 170px;
    border-radius: 10px 10px 0 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
  `}
`

export const Wrapper = styled.main<ModalStylesProps>`
  ${({ open }) => css`
    display: ${!open ? 'none' : 'flex'};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  `}
`

export const Content = styled.div<modalProps>`
  ${({ theme, pokeType }) => css`
    width: 470px;
    height: 83vh;
    background: white;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 3px ${theme.colors[pokeType]};
    padding: 20px;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    ${media.lessThan('medium')`
    width: 90%;
    `}
  `}
`
