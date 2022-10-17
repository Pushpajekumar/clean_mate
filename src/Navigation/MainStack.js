import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import TabRoutes from './TabRoutes'

const MainStack = (Stack) => {
  return (
   <>
    <Stack.Screen name={NavigationStrings.TAB_ROUTES} component={TabRoutes} />
   </>
  )
}

export default MainStack