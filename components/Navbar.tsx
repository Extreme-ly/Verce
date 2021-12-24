import React, { ReactElement } from 'react'
import { AppBar, Box, ClickAwayListener, Container, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import LogoVerce from '../public/Logo.png';
import { alpha, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { CalendarToday } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginTop: 6,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

const Calendar = styled('div')(({theme}) => ({
    backgroundColor: "#fff",
    borderRadius: '4px',
    borderColor: "#fff",
    width: '10rem',
    marginTop: '0.5rem'
}));

export default function Navbar(): ReactElement {
  const [value, setValue] = React.useState<Date | null>(null);

    return (
        <Box>
            <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 0, top: 0 }}>
                <Container maxWidth="xl" disableGutters>
                    <Toolbar>
                        <Box>
                            <Image src={LogoVerce} width="120px" height="120px" />
                        </Box>
                      
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Eg. Stacy's Recipes"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Container>
                        </Container>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                          <IconButton
                              size="large"
                              color="inherit"
                          >
                            <AddIcon sx={{ position: 'relative', mr: 2 }} fontSize='large' />
                          </IconButton>
                        
                        {/* <ClickAwayListener onClickAway={() => ( setCalendar(false) )}>
                          <IconButton
                            size="large"
                            color='inherit'
                            onClick={() => ( setCalendar(true) )}
                          >
                            <CalendarToday fontSize='large' />
                          </IconButton>
                        </ClickAwayListener> */}

                          <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ position: 'relative', bgcolor: '#fff' }}>
                            <Calendar>
                            <DatePicker
                              label=""
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                            </Calendar>
                          </LocalizationProvider>

                        

                          <IconButton size="large" color="inherit">
                            <AccountCircle sx={{ position: 'relative', mr: 2 }} fontSize='large'  />
                          </IconButton>


                          <IconButton size="large" color="inherit">
                            <SettingsIcon sx={{ position: 'relative', mr: 2 }} fontSize='large'  />
                          </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
                    
            </AppBar>
        </Box>
    )
}
