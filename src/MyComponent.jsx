import React,{ useState } from 'react'

const MyComponent = () => {
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(22);
    const updateName = () => {
        setName("Bob");
        setAge(30)
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
  )
}

export default MyComponent