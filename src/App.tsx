import "./global.css"
import { useEffect, useState } from "react"
import { Button } from "./components/button/Button"

import styles from "./app.module.css"

export function App() {
  
  const[numero, setNumero] = useState(0)

  function handleAdd(){
    setNumero(numero + 1)
  }

  function handleRemove(){
    setNumero(numero - 1)
  }

  useEffect(() => {
    console.log("Mudei o numero kkk")
  }, [numero])

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd}/>
      <span>{numero}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  )
}