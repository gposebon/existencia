import React, { Component } from 'react'
import Link from 'react-router-dom/Link'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <ToolBar className='nav-container'>
                        <Button color='inherit' component={Link} to='/'>Home</Button>
                        <Button color='inherit' component={Link} to='/entrada'>Entrada</Button>
                        <Button color='inherit' component={Link} to='/limpieza'>Limpieza</Button>
                        <Button color='inherit' component={Link} to='/semilla'>Semilla</Button>
                        <Button color='inherit' component={Link} to='/proveedor'>Proveedor</Button>
                        <Button color='inherit' component={Link} to='/silo'>Silo</Button>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar
