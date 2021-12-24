import { Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Templates from '../components/Templates';

// function ButtonToggle() {
//   const { theme, setTheme } = useTheme()
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'flex-start',
//         width: '10%',
//         alignItems: 'flex-end',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       { theme }
//       <IconButton sx={{ ml: 1 }} onClick={() => ((theme === "light") ? setTheme("dark") : setTheme('light') )} color="inherit">
//         {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

function Title():React.ReactElement {
  const date = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const day = date.getDate()

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: " 25.075rem", width: "100vw", position: 'absolute' }}>
        <Typography variant="h2" component="h2">{day}, {month} {year} </Typography>
      </Box>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Title />
        <Divider />  
        <Templates />
        
      </div>
    </>
  )
}

export default Home
