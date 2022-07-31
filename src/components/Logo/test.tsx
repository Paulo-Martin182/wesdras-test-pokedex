import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
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
    //renderizar o componente 'render'
    //selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    //expect - assertion - asserção - comparação - analise (espero que renderize a logo grass)
    renderWithTheme(<Logo pokeType="dark" />)
    expect(screen.getByLabelText(/Pokedex/i).parentElement).toHaveStyle({
      color: '#705746'
    })
  })
})
