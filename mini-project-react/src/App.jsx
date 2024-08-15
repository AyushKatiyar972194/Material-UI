import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import WeatherApp from './WeatherApp'
function App() {
  // const [count, setCount] = useState(0)
  //  let handleClick=()=>{
  //   console.log("button was clicked");
  //  };
  return (
    <>
    {/* <h1>Material UI Component</h1>
    <Button variant="contained" onClick={handleClick} size="large" startIcon={<DeleteIcon />}>Click Me!</Button>
    <Alert severity="error">This is an error Alert.</Alert>  
    <br /><br /><br />

    <Button variant="contained" onClick={handleClick} color="error" size="small">Click ME 2! </Button>
   */}
     {/* <SearchBox></SearchBox>
      <InfoBox></InfoBox> */}
      <WeatherApp></WeatherApp>
      </>
    
  )
}

export default App
