import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Logo from '.'

describe('<Logo />', () => {
  it('Verificar se a cor da logo inicia como grass', () => {
    //renderizar o componente 'render'
    //selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    //expect - assertion - asserção - comparação - analise (espero que renderize a logo grass)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyle({
      color: '#7AC74C'
    })
  })

  it('Verificar se a cor da logo inicia como dark', () => {
    renderWithTheme(<Logo pokeType="dark" />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyle({
      color: '#705746'
    })
  })

  it('Verificar se o tamanho da logo é normal', () => {
    renderWithTheme(<Logo size="normal" />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyle({
      width: '200px'
    })
  })

  it('Verificar se o tamanho da logo é fullWidth', () => {
    renderWithTheme(<Logo size="fullWidth" />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyle({
      width: '100%'
    })
  })

  it('Verificar se o texto está sumindo no hideMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyleRule(
      'width',
      '52px',
      { media: '(max-width: 768px)' }
    )
  })
})
