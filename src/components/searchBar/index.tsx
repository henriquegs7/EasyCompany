import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Container, TextInput, OrderButton } from './styles'

//TODO: retirar os any e por a prop correta
interface SearchBarPros {
  setResultsFound: (a: object[]) => void
  valueList: { nome: string }[]
}

export const SearchBar = ({ setResultsFound, valueList }: SearchBarPros) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (searchText === '') {
      const newList = [...valueList]

      newList.sort((itemA, itemB) =>
        itemA.nome > itemB.nome ? 1 : itemB.nome > itemA.nome ? -1 : 0,
      )
      setResultsFound(newList)
    } else {
      setResultsFound(
        valueList.filter(
          item =>
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),
      )
    }
  }, [searchText])

  function handleOrderClick() {}

  return (
    <Container>
      <TextInput
        placeholder="Pesquise uma pessoa"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={t => setSearchText(t)}
      />
      <OrderButton>
        {/* onPress={handleOrderClick} */}
        <Icon name="adduser" size={32} color="#FFF" />
      </OrderButton>
    </Container>
  )
}
