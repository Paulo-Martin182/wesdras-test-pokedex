import * as S from './styles'
import { MockCard } from './Mock'
import { PokeTypes } from 'utils/pokeTypes'
import { formatTag } from 'utils/formatNumber'

export type CardProps = {
  tag: string
  image: string
  title: string
  onClick: () => void
} & Pick<PokeTypes, 'pokeType'>

const Card = ({
  pokeType = 'fire',
  tag = MockCard.tag,
  image = MockCard.image,
  title = MockCard.title,
  onClick
}: CardProps) => {
  return (
    <S.Wrapper pokeType={pokeType} onClick={onClick}>
      <S.Content>
        <S.Tag pokeType={pokeType}>#{formatTag(tag)}</S.Tag>
        <S.Image src={image} />
      </S.Content>
      <S.Base pokeType={pokeType}>
        <S.Title>{title}</S.Title>
      </S.Base>
    </S.Wrapper>
  )
}

export default Card
