// Code Keypad Component Here

const Keypad = () => {
    const handleChange = () => {
        console.log('Entering password...')
    }
  return (
    <div>
        <input type="password" onChange={handleChange} />
    </div>
  )
}

export default Keypad
