import WithSubnavigation from './Navbar'
import Payments from './pages/Payments'
import Posts from './pages/Posts'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <WithSubnavigation></WithSubnavigation>
      <Payments></Payments>
    </ChakraProvider>
  )
}

export default App
