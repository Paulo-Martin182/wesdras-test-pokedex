/* eslint-disable react-hooks/exhaustive-deps */
import Card from 'components/Card'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { useEffect, useState } from 'react'
import * as S from './styles'

const HomeTemplate = (data: { data: any[] }) => {
  const [searchText, setSearchText] = useState<string | any>('')
  const [pokeList, setPokeList] = useState(data.data.slice(0, 10))

  const pokeFilter = data.data.filter((pokemons) =>
    pokemons.name.toLowerCase().includes(searchText.toLowerCase())
  )

  useEffect(() => {
    if (searchText != '') {
      setPokeList(pokeFilter)
    } else {
      setPokeList(data.data.slice(0, 10))
    }
  }, [searchText])

  console.log(pokeList)

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <Logo pokeType="grass" />
        <Search value={searchText} onChange={setSearchText} />
      </S.HeaderContainer>
      <S.CardList>
        {pokeList.map((item) => (
          <Card
            image={item.image}
            title={item.name}
            tag={item.id}
            pokeType={item.type[0].type.name}
            key={item.name}
          />
        ))}
      </S.CardList>
    </S.Wrapper>
  )
}

export default HomeTemplate
