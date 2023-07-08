import { createContext, useState } from 'react'

export const useInitialAppValue = () => {
  const [isLoading, setIsLoading] = useState(false)

  return { isLoading, setIsLoading }
}

const AppContext = createContext()

export default AppContext
