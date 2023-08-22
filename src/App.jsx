import { useState } from "react"
import { 
    Box, 
    Input, 
    Button, 
    Textarea,
    Spinner,
    Menu,
    MenuButton,
    MenuList,
    MenuItem} from "@chakra-ui/react"

function App() {

  const [valueInput, setValueInput] = useState([])

  function valoresInput() {
    return alert(valueInput)
  }

  return (
    <Box bg="#070719" w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
        <h1>Aqui é meu campo de teste</h1>

        <Input placeholder="Digite aqui" width="300px" mt="10px" bg="#0B0B3B" color="#fff" onChange={(e) => setValueInput(e.target.value) }/>

        <Button mt="10px" h="30px" onClick={valoresInput}>Enviar</Button>
        <br />


      <Textarea bg="#fff" w="300px" h="100px"/>
      <Box mt="10px" display="flex" gap="10px">
        <Spinner color="red.500"/>
        <Spinner size="xl"/>
      </Box>
      <Box>

      <Menu>
          <MenuButton as={Button}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default App
