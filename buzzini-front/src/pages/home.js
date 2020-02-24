import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import axios from 'axios'
import dayjs from 'dayjs'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class home extends Component {
    
    state = {
        entrada: []
    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/entrada')
            .then( res => {
                this.setState({
                    entrada: res.data
                })
            })
            .catch( (err => {console.log(err)}
            ))
        }
    
    render() {
        return (
            <div>
                <Grid container spacing={10}> 
                    <Grid item sm={8} sx= {10}>
                        <h3>Ultimas Entradas</h3>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Fecha</TableCell> 
                                        <TableCell>Semilla</TableCell>
                                        <TableCell>Kilos</TableCell>
                                        <TableCell>Proveedor</TableCell>
                                        <TableCell>Silo</TableCell>    
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.entrada.map(row => (
                                <TableRow key={row.id}>
                                        <TableCell>{dayjs(row.Fecha_Entrada).format('DD/MM/YYYY')}</TableCell>
                                        <TableCell>{row.Semilla.Nombre_Semilla}</TableCell>
                                        <TableCell>{row.Kilos_Entrada}</TableCell>
                                        <TableCell>{row.Proveedor.Apellido_Proveedor + " " + row.Proveedor.Nombre_Proveedor}</TableCell>
                                        <TableCell>{row.Silo.Nombre_Silos}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item sm={4} sx= {10}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home
