import { PokeTypes } from 'utils/pokeTypes'
import * as S from './styles'

export type BarStatsType = {
  statusName?: string
  statusValue?: string | number
} & Pick<PokeTypes, 'pokeType'>

const BarStats = ({
  statusName = 'HP',
  statusValue = '63',
  pokeType = 'grass'
}: BarStatsType) => (
  <S.Wrapper>
    <S.TitleBar>{statusName}</S.TitleBar>
    <hr />
    <S.ValueBar>{statusValue}</S.ValueBar>
    <S.ProgressBox pokeType={pokeType}>
      <S.ProgressBar
        pokeType={pokeType}
        progress={`${statusValue}%`}
      ></S.ProgressBar>
      <span></span>
    </S.ProgressBox>
  </S.Wrapper>
)

export default BarStats
