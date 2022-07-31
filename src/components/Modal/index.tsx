/* eslint-disable @typescript-eslint/no-explicit-any */
import BarStats from 'components/BarStats'
import { Key, useEffect, useState } from 'react'
import { formatTag } from 'utils/formatNumber'
import { PokeTypes } from 'utils/pokeTypes'
import * as S from './styles'

export type modalProps = {
  open?: boolean
  name?: string
  tag?: string
  closeModal?: () => void
} & Pick<PokeTypes, 'pokeType'>

const Modal = ({
  open,
  name,
  closeModal,
  pokeType = 'grass',
  tag = '154'
}: modalProps) => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) =>
        setData({
          name: data.name,
          abilities: data.abilities,
          image: data.sprites.other['official-artwork'].front_default,
          typeList: data.types,
          stats: data.stats
        })
      )
      .catch((err) => console.log(err))
  }, [name])

  return (
    <S.Wrapper open={open} onClick={closeModal}>
      <S.Content pokeType={pokeType}>
        <S.HeaderContent pokeType={pokeType}>
          <S.TitleName>{name}</S.TitleName>
          <S.Tag>#{formatTag(tag)}</S.Tag>
        </S.HeaderContent>

        <S.BoxImage>
          <S.Image src={data?.image} />
        </S.BoxImage>

        <S.BoxTypes>
          {data?.typeList.map((item: { type: { name: any } }) => (
            <S.TypesBtn pokeType={item.type.name} key={item.type.name}>
              {item.type.name}
            </S.TypesBtn>
          ))}
        </S.BoxTypes>

        <S.AbilitiesTitle pokeType={pokeType}>Habilidades</S.AbilitiesTitle>
        <S.AbilitiesBx>
          <S.AbilitiesBtn>overgrow</S.AbilitiesBtn>
          <S.AbilitiesBtn>chlorophyl</S.AbilitiesBtn>
        </S.AbilitiesBx>

        {data?.stats.map(
          (
            item: {
              stat: { name: string | undefined }
              base_stat: string | number | undefined
            },
            i: Key | null | undefined
          ) => (
            <BarStats
              key={i}
              statusName={item.stat.name}
              statusValue={item.base_stat}
              pokeType={pokeType}
            />
          )
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default Modal
