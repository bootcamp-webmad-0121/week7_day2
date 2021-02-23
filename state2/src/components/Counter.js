import { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counterValue: 0,
            isDanger: false
        }
    }

    increaseCounter() {

        this.state.counterValue <= 5
            ?
            this.setState({ counterValue: this.state.counterValue + 1 })
            :
            this.setState({ counterValue: this.state.counterValue + 1, isDanger: true })
    }

    render() {
        return (
            <section className="counter">
                <h3>Contador con estado</h3>
                <p>El contador se ha ejecutado {this.state.counterValue} veces</p>
                <button className={this.state.isDanger ? 'danger' : undefined} onClick={() => this.increaseCounter()}>Aumentar contador</button>
            </section>
        )
    }
}

export default Counter