import React, { Component } from 'react'
import whithStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormularioSemilla from '../components/formulario'

import axios from 'axios'

const styles = {
    titulo: {
        margin: '10px auto 10px auto'
    },
    botones: {
        margin: '20px 10px 20px 10px'
    }
};

class semilla extends Component {
    constructor(){
        super();
        this.state = {
           semilla: {
            nombre: '',
            variedad: '',
            descripcion: '',
           },
            mostrarFormularioIngresar: false
        }
    }
    
    ingresarSemilla = (event) => {
        event.preventDefault();
        const semilla = {
            nombre: this.state.semilla.nombre,
            variedad: this.state.semilla.variedad,
            descripcion: this.state.semilla.descripcion
        }
        axios.post('http://localhost:3000/semilla')
            .then(res => {
                console.log(res)
            })
    }

    cambio = (event) =>{
        this.setState({
            [this.target.nombre] : this.target.value
        });
    }

    mostrarFormulario(componente) {
        this.setState({
            mostrarFormularioIngresar: componente == 'f'
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container className={classes.form}>
                    <Grid item sm sm={4} sx= {10}>
                        <Typography variant="h4" className={classes.titulo}>Semillas</Typography>
                        <Button variant="contained" color="secondary" className={classes.botones}
                        onClick={this.mostrarFormulario.bind(this, 'f')}>Ingresar</Button>
                        <Button variant="contained" color="secondary" className={classes.botones}
                        onClick={this.mostrarFormulario.bind(this, 'b')}>Borrar </Button>
                        <Button variant="contained" color="secondary" className={classes.botones}
                        onClick={this.mostrarFormulario.bind(this, 'e')}>Editar </Button>
                        <Typography 
                            variant="h5" 
                            className={classes.titulo}>
                                Entrada de Semillas
                        </Typography>
                        { this.state.mostrarFormularioIngresar && <FormularioSemilla 
                            semilla={this.state}
                            guardarCambio = {this.cambio}
                            ingresarSemilla = {this.ingresarSemilla}
                        />
                        }
                    </Grid>    
                    <Grid item sm={8} sx= {10}> 
                    </Grid>
                </Grid>    
            </div>
        )
    }
}

export default whithStyles(styles)(semilla)