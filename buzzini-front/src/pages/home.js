import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import axios from 'axios'


class home extends Component {
    
    state = {
        entrada: null
    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/entrada')
            .then( res => {
                console.log(res)
                this.setState({
                    entrada: res.data
                })
            })
            .catch( (err => {console.log(err)}
            ))
    }
    
    render() {
        let vistaEntrada = this.state.entrada ? (
            this.state.entrada.map(entrada => <p>entrada.Kilos_Entrada</p>)
        ) : <p>Loading ...</p>
        return (
            <div>
                <Grid container spacing={10}> 
                    <Grid item sm={6} sx= {12}>
                        {vistaEntrada}
                    </Grid>
                    <Grid item sm={6} sx= {10}>
                        <p>Ultimas Limpiezas</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home
