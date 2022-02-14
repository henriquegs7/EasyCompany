import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Customer, Functionary, Home, Products, Provider } from '@pages'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import IconFunctionary from 'react-native-vector-icons/Entypo'

enum IconPages {
  Functionary = 'Funcionários',
  Customer = 'Clientes',
  Home = 'Home',
  Products = 'Produtos',
  Provider = 'Fornecedor',
}

interface TabBarProps {
  route: any
  color: any
  size: any
}

export const Router = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Clientes"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const ICON_PAGES = {
              [IconPages.Functionary]: () => (
                <IconFunctionary name="v-card" size={size} color={color} />
              ),
              [IconPages.Customer]: () => (
                <Icon name="users" size={size} color={color} />
              ),
              [IconPages.Home]: () => (
                <Icon name="users" size={size} color={color} />
              ),
              [IconPages.Products]: () => (
                <Icon name="package" size={size} color={color} />
              ),
              [IconPages.Provider]: () => (
                <Icon name="truck" size={size} color={color} />
              ),
              DEFAULT: () => <Icon name="circle" size={size} color={color} />,
            } as { [key: string]: any }

            const barIcon = ICON_PAGES[route.name] || ICON_PAGES.DEFAULT

            return barIcon()
          },
          tabBarStyle: {
            backgroundColor: 'rgb(19,20,24)',
            borderTopColor: 'transparent',
          },
          headerStyle: {
            backgroundColor: 'rgb(20,20,20)',
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: 'rgb(0, 172, 74)',
          tabBarInactiveTintColor: '#777',
        })}>
        <Tab.Screen
          name="Funcionários"
          component={Functionary}
          options={{
            tabBarBadge: 5,
          }}
        />
        <Tab.Screen name="Clientes" component={Customer} />
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerShown: false,
            tabBarLabel: '',

            tabBarIcon: () => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  colors={['rgb(0, 172, 74)', 'rgb(0, 102, 4)']}>
                  <Icon name="home" size={26} color="#FFF" />
                </LinearGradient>
              </View>
            ),
          })}
        />
        <Tab.Screen name="Produtos" component={Products} />
        <Tab.Screen name="Fornecedor" component={Provider} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
