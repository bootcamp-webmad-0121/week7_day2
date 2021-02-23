import { Component } from 'react'

import User from './User'

class Contacts extends Component {

    constructor() {
        super()
        this.state = {
            userA: {
                firstName: "Harper"
            },
            userB: {
                firstName: "Ana"
            },
            backColor: 'white'
        }
    }

    changeInfo() {
        this.setState({
            userA: {
                firstName: 'Sara'
            },
            userB: {
                firstName: "Susan"
            },
            backColor: 'red'
        })
    }

    render() {

        return (

            <>
                <h2>Lisado de usuarios</h2>

                <User
                    color={this.state.backColor}
                    firstName={this.state.userA.firstName}
                />

                <User
                    firstName={this.state.userB.firstName}
                />

                <button onClick={() => this.changeInfo()}>Cambiar nombres y color</button>

            </>
        )
    }

}


export default Contacts