import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
   <Tabs>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Text style={{ color }}>🏠</Text>
        ),
      }}
    />
    <Tabs.Screen
      name="inbox"
      options={{
        title: 'Inbox',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Text style={{ color }}>📬</Text>
        ),
      }}
    />
    <Tabs.Screen
      name="favourit"
      options={{
        title: 'Favourites',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Text style={{ color }}>❤️</Text>
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Text style={{ color }}>👤</Text>
        ),
      }}
    />
   </Tabs>
  )
}