'use client'

const Button = () => {

  const handleButton = () => {
    console.log("object");
  }
  return (
    <button onClick={handleButton}>Button</button>
  )
}

export default Button