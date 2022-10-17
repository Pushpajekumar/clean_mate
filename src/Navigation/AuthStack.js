import React from 'react'
import * as Screens from '../screens'
import NavigationStrings from '../constants/NavigationStrings'

const AuthStack = (Stack) => {
  return (
   <>
    <Stack.Screen name={NavigationStrings.SIGN_UP} component={Screens.SignUp} />
    <Stack.Screen name={NavigationStrings.SIGN_IN} component={Screens.SignIn} />
    <Stack.Screen name={NavigationStrings.OTP_VERIFICATION} component={Screens.OtpVerification} />
   </>
  )
}

export default AuthStack