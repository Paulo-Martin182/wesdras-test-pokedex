import { GetServerSideProps } from 'next'
import HomeTemplate from 'templates/Home'

export type itemProps = {
  name: string
  image: string
  type: []
  id: number
}

export type DefaultPropsData = {
  data: itemProps[]
}

export default function Home({ data }: DefaultPropsData) {
  return <HomeTemplate data={data} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0`
  )
  const data = await res.json()
  const pokeImages = data.results.map((item: { url: string }) => item.url)

  const selectedPokemon = await Promise.all(
    pokeImages.map(async (i: any) => await (await fetch(`${i}`)).json())
  )

  const pokeNames = data.results.map((item: { name: string }) => item.name)
  const pokeId = selectedPokemon.map((item) => item.id)
  const imagesSelect = selectedPokemon.map(
    (item) => item.sprites.other['official-artwork'].front_default
  )
  const PokeTypes = selectedPokemon.map((item) => item.types)

  const PokeData = pokeNames.map(
    function (x: string, i: number) {
      return {
        name: x,
        image: imagesSelect[i],
        type: PokeTypes[i],
        id: pokeId[i]
      }
    }.bind(this)
  )

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      data: PokeData
    }
  }
}
