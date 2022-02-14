import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { PhotoUser, ButtonOnclick, ListForm } from '@components'
import { COSTOMER } from '@constants'
import {
  Container,
  UserInformation,
  InfoText,
  FlatList,
  VehicleItems,
  AddVehicle,
} from './styles'

interface InfoCustomerPros {
  user: object
  setRenderInfo: any
  renderInfo: any
}

export function InfoCustomer({
  user,
  setRenderInfo,
  renderInfo,
}: InfoCustomerPros) {
  const [edit, setEdit] = useState(false)

  const Info = ({ item }) =>
    item.veiculos && (
      <VehicleItems>
        <ListForm
          title="Motorista"
          status={edit}
          value={item.veiculos?.motorista}
        />
        <ListForm title="Placa" status={edit} value={item.veiculos?.placa} />
        <ListForm
          title="Município"
          status={edit}
          value={item.veiculos?.municipio}
        />
        <ListForm
          title="Peso bruto"
          status={edit}
          value={item.veiculos?.pesoBruto}
          type="numeric"
        />
        <ListForm
          title="Peso liquido"
          status={edit}
          value={item.veiculos?.pesoLiquido}
          type="numeric"
        />
      </VehicleItems>
    )

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 95,
        }}>
        <ButtonOnclick
          title="Voltar"
          setChangeState={setRenderInfo}
          status={renderInfo}
        />
        <ButtonOnclick title="Editar" setChangeState={setEdit} status={edit} />
      </View>
      <UserInformation>
        <PhotoUser iten="" />
        <InfoText>
          <Text>
            colocar endereçao e tela com històrico de venda do cliente exibir
            anexo de vale, ter observaçoes
          </Text>
          <ListForm title="Nome" status={edit} value={user.nome} />
          <ListForm
            title="Data de Nascimento"
            status={edit}
            value={user.dataNascimento}
            type="numeric"
          />
          <ListForm
            title="Celular"
            status={edit}
            value={user.celular}
            type="numeric"
          />
          <ListForm title="Email" status={edit} value={user.email} />
        </InfoText>
      </UserInformation>

      <FlatList
        data={COSTOMER}
        renderItem={Info}
        keyExtractor={item => item.id}
      />

      {edit && (
        <AddVehicle>
          <Text style={{ fontWeight: 'bold' }}>+</Text>
        </AddVehicle>
      )}
    </Container>
  )
}
