import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
`;

export const Card = styled.View`
  width: 300px;
  height: 550px;
  margin-horizontal: 5px;
  background-color: black;
  border-radius: 15px;
`;

export const ImageView = styled.View`
  width: 280px;
  height: 400px;
  margin-horizontal: 10px;
  margin-bottom: 25px;
  background-color: white;
  border-radius: 15px;
`;

export const TitleProduct = styled.Text`
  align-items: center;
  color: white;
  font-size: 24px;
`;

export const Title = styled.Text`
  align-items: center;
  color: white;
`;
