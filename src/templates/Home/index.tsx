/* eslint-disable react-hooks/exhaustive-deps */
import Card from 'components/Card'
import Logo from 'components/Logo'
import Modal from 'components/Modal'
import Search from 'components/Search'
import { useEffect, useState } from 'react'
import * as S from './styles'

const HomeTemplate = (data: { data: any[] }) => {
  const [openModal, setModal] = useState(false)
  const [modalData, setModalData] = useState<any>({ type: '', name: '' })
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

  const handleModal = (type: string, name: string, id: number) => {
    setModal(!openModal)
    setModalData({ type: type, name: name, id: id })
  }

  return (
    <>
      <S.Wrapper>
        <S.HeaderContainer>
          <Logo pokeType={modalData.type} />
          <Search value={searchText} onChange={setSearchText} />
        </S.HeaderContainer>
        <S.CardList>
          {pokeList.map((item) => (
            <Card
              onClick={() =>
                handleModal(item.type[0].type.name, item.name, item.id)
              }
              image={item.image}
              title={item.name}
              tag={item.id}
              pokeType={item.type[0].type.name}
              key={item.name}
            />
          ))}
        </S.CardList>
      </S.Wrapper>
      <Modal
        open={openModal}
        closeModal={() => setModal(false)}
        pokeType={modalData.type}
        name={modalData.name}
        tag={modalData.id}
      />
    </>
  )
}

export default HomeTemplate
