import Logo from 'components/Logo'
import Search from 'components/Search'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Logo pokeType="grass" />
    <Search />
  </S.Wrapper>
)

export default Header
