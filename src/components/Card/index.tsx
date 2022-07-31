import * as S from './styles'
import { MockCard } from './Mock'
import { PokeTypes } from 'utils/pokeTypes'

export type CardProps = {
  tag: string
  image: string
  title: string
} & Pick<PokeTypes, 'pokeType'>

const Card = ({
  pokeType = 'fire',
  tag = MockCard.tag,
  image = MockCard.image,
  title = MockCard.title
}: CardProps) => (
  <S.Wrapper pokeType={pokeType}>
    <S.Content>
      <S.Tag pokeType={pokeType}>{tag}</S.Tag>
      <S.Image src={image} />
    </S.Content>
    <S.Base pokeType={pokeType}>
      <S.Title>{title}</S.Title>
    </S.Base>
  </S.Wrapper>
)

export default Card
