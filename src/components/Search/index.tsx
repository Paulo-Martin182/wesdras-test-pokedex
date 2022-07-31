/* eslint-disable @typescript-eslint/no-explicit-any */
import useDebounce from 'hooks/debounce/useDebounce'
import { Dispatch, useState } from 'react'
import * as S from './styles'

export type SearchProps = {
  value: string
  onChange?: Dispatch<any>
}

const Search = ({ value, onChange }: SearchProps) => {
  const [displayValue, setDisplayValue] = useState(value)
  const debounceChange = useDebounce(onChange, 800)

  function handleChange(event: { target: { value: any } }) {
    setDisplayValue(event.target.value)
    debounceChange(event.target.value)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="search"
        placeholder="Procurar"
        value={displayValue}
        onChange={handleChange}
      />
    </S.Wrapper>
  )
}

export default Search
