import { Select, MenuItem, TextField, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    select: {
        width: 150,
        height: 40,
        background: '#F6F6F6'
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important']
    },
    textfield: {
        width: '100%',
        background: '#F6F6F6'
    }
})

const Form = () => {
    const classes = useStyles()
    
    return (
        <Box className={classes.component}>
            <Select 
                className={classes.select}
                label="POST"
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField
                size="small"
                className={classes.textfield}
            />
            <Button
                className={classes.button}
                variant="contained"
            >
                Send
            </Button>
        </Box>
    )
}

export default Form;