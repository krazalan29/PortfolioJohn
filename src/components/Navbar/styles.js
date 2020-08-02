import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    bar: {
      background: '#021718',
      height: 70
    },
    title: {
      flexGrow: 1,
      fontFamily:"'Poppins', sans-serif",
      fontWeight: "900",
      fontSize: 20,
      letterSpacing: 3
      
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
  
    },
    drawer: {
      width: 'auto'
    },
    menuIcon: {
      color: 'white'
    },
    linkTitle: {
      color: 'white',
      textDecoration: 'none'
    },
    linkItem: {
      color: 'black',
      textDecoration: 'none'
    },
    navigationItems: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    navigationMenu: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },buttons:{
      fontFamily:"'Poppins', sans-serif",
      fontWeight: "900",
      fontSize: 20,
      textTransform: "lowercase",
      margin: "auto 15px"
      
    }
  
    
  }))
  