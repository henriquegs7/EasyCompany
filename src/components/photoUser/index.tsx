import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Photo } from './styles'

interface PhotoUserPros {
  iten: any
}

export const PhotoUser = ({ iten }: PhotoUserPros) => {
  return (
    <Container>
      {iten ? (
        <Photo source={iten} />
      ) : (
        <Icon name="user" size={24} color="#eee2e2" />
      )}
    </Container>
  )
}
