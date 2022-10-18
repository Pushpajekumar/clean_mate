import React from 'react'
import * as Screens from '../screens'
import NavigationStrings from '../constants/NavigationStrings'
import TabRoutes from './TabRoutes'

const MainStack = (Stack) => {
  return (
   <>
    <Stack.Screen name={NavigationStrings.TAB_ROUTES} component={TabRoutes} />
    <Stack.Screen name={NavigationStrings.SUB_CATEGORY} component={Screens.Subcategory} />
    <Stack.Screen name={NavigationStrings.SERVICE_INFO} component={Screens.ServiceInfo} />
   </>
  )
}

export default MainStack