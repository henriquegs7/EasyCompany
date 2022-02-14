import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgb(0, 78, 34);
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0 10px 0;
  margin: 0 10px;
  background-color: rgb(0, 78, 34);
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const SalesMade = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 100px;
  background-color: rgb(0, 78, 34);
  align-items: center;
`;

export const SalesHistory = styled.TouchableOpacity`
  border-radius: 100px;
  border-width: 2px;
  border-color: white;
  height: 40px;
  width: 150px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 70%;
  background-color: black;
`;

export const Title = styled.Text`
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export const ButtonSales = styled.TouchableOpacity`
  border-radius: 100px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const IconSales = styled.Image`
  width: 30px;
  height: 30px;
`;
