import React from 'react'
import { AppBar,Toolbar,Container,Typography, makeStyles,Button } from '@material-ui/core';
import {
 useHistory
} from "react-router-dom";
import '../App.css'

const Header = () => {
const hist = useHistory();
const useStyles = makeStyles({

    heading:{'fontFamily':'Aldrich,sans-serif','float':'left','marginTop':'3%'},
    names:{'fontFamily':'Aldrich,sans-serif',
            'color':'#DC143C',
          'fontSize':'64px',
        'margin-left':'25%','backgroundImage':'https://www.pcgamesn.com/wp-content/uploads/2021/07/apex-legends-season-10-release-date.jpg'},
        header:{'backgroundImage':'https://www.pcgamesn.com/wp-content/uploads/2021/07/apex-legends-season-10-release-date.jpg'}

})
function Buttstlye(){
  const classes = useStyles();
  return <Button className={classes.heading} color='primary'variant="contained" size='large' onClick={()=>{hist.push("/")}} >Home</Button>
}
function Stylesheading(){
  const classes = useStyles();
  return <Typography className={classes.names} color='primary'  size='large'>Apex Legends</Typography>

}
    
    return (
    
        <AppBar className = "ww" position="static"  >
      <Container maxWidth="md">
        <Buttstlye></Buttstlye>
        <Toolbar>
         <Stylesheading></Stylesheading>
        </Toolbar>
      </Container>
    </AppBar>
   
    )
}

export default Header
