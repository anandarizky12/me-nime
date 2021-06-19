import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import './style.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom:40,
    marginRight:70,
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),

  },
}));



function Filter({type,set}) {
    const classes = useStyles();

    const [state, setState] = React.useState({
      type: 'All',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      set({
        [name]: event.target.value,
      })
    
    };
    console.log(type.type)
    return (
        <FormControl className={classes.formControl}>
            <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="type"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
                >
                    <option className="secondary">All</option>
                    <option  className="secondary" >TV</option>
                    <option  className="secondary" >Movie</option>
                    <option className="secondary" >OVA</option>
              
                  
            </NativeSelect>
        
        </FormControl>
    )
}

export default Filter;
