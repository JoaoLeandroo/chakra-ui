import { useState } from "react"
import { Box, Input, Button, Textarea } from "@chakra-ui/react"

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


      <Textarea bg="#fff" w="500px" h="200px"/>
    </Box>
  )
}

export default App
