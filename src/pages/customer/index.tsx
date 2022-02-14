import React, { useState } from 'react'
import { PhotoUser, SearchBar } from '@components'
import { COSTOMER } from '@constants'
import { InfoCustomer } from './components'
import { Container, FlatList, ButtonList, NameClient } from './styles'

interface CustomerPros {
  item: any
}

export const Customer = () => {
  const [renderInfo, setRenderInfo] = useState(false)
  const [selectUser, setSelectUser] = useState('')
  const [list, setList] = useState({})

  function buttonItem({ item }: CustomerPros) {
    return (
      <ButtonList
        onPress={() => {
          setRenderInfo(!renderInfo)
          setSelectUser(item)
        }}>
        <PhotoUser iten="" />
        <NameClient>{item.nome}</NameClient>
      </ButtonList>
    )
  }

  return (
    <Container>
      {renderInfo === false ? (
        <>
          <SearchBar setResultsFound={setList} valueList={COSTOMER} />
          <FlatList
            data={list}
            renderItem={buttonItem}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <InfoCustomer
          user={selectUser}
          setRenderInfo={setRenderInfo}
          renderInfo={renderInfo}
        />
      )}
    </Container>
  )
}
