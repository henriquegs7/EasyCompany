import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  margin: 10px;
  height: 100%;
`;

export const UserInformation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 95%;
`;

export const InfoText = styled.View`
  background-color: rgb(57, 70, 78);
  border-radius: 15px;
  border-width: 1px;
  padding: 5px;
  width: 80%;
`;

export const FlatList = styled.FlatList`
  width: 95%;
`;

export const VehicleItems = styled.View`
  background-color: rgb(57, 70, 78);
  border-radius: 15px;
  border-width: 1px;
  padding: 5px;
`;

export const AddVehicle = styled.View`
  background-color: #fff;
  border-radius: 15px;
  border-width: 1px;
  height: 10px;
  padding: 5px;
  margin: 5px 16px;
  align-items: center;
  font-size: 20px;
`;
