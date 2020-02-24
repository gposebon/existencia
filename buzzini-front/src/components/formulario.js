import React from 'react'
import whithStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
    form: {
        textAlign: "center"
    },
    title: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20 
    },
};

const formulario = (props) => {
    const { classes,  semilla, guardarCambio, ingresarSemilla} = props;
    return (
        <div>
            <form noValidate onSubmit={ingresarSemilla}>
                <TextField 
                    id="nombre" 
                    name="nombre" 
                    type="text" 
                    label="Nombre" 
                    className={classes.textField}
                    defaultValue={semilla.nombre} 
                    onChange={guardarCambio} 
                    fullWidth />
                <TextField 
                    id="variedad" 
                    name="variedad" 
                    type="text" 
                    label="Variedad" 
                    className={classes.textField}
                    defaultValue={semilla.variedad} 
                    onChange={guardarCambio} 
                    fullWidth />
                <TextField 
                    id="descripcion" 
                    name="descripcion" 
                    type="text" 
                    label="Descripcion" 
                    className={classes.textField}
                    defaultValue={semilla.descripcion} 
                    onChange={guardarCambio} 
                    fullWidth />
                <Button 
                    type='submit' 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}>
                        Ingresar Semilla
                </Button>    
            </form>
        </div>
    )
}

export default whithStyles(styles)(formulario)




