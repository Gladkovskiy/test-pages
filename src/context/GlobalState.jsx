import React, {useState} from 'react'
import {createContext} from 'react'
import {useMediaQuery} from 'react-responsive'

export const globalStateContext = createContext()

const GlobalState = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 991})

  const [bgNumber, setBgNumber] = useState(0)

  return (
    <globalStateContext.Provider value={{isMobile, setBgNumber, bgNumber}}>
      {children}
    </globalStateContext.Provider>
  )
}

export default GlobalState
