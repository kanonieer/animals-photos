import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1,
            animal: 'shibes'
        }
    }

    render() {
        const { loading } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Count:
                    <input type="number" value={this.state.count} onChange={this.handleCountChange} min={1} max={10} />
                </label>
                <label>
                    Animal:
                    <select defaultValue={this.state.animal} onChange={this.handleAnimalChange}>
                        <option value="shibes">Shibes</option>
                        <option value="cats">Cats</option>
                        <option value="birds">Birds</option>
                        <option value="random">Random</option>
                    </select>
                </label>
                <input type="submit" value={this.buttonText(loading)} />
            </form>
        )
    }

    buttonText = loading => loading ? 'Ładowanie danych' : 'Szukaj'
    handleCountChange = event => this.setState({count: event.target.value})
    handleAnimalChange = event => this.setState({animal: event.target.value})
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.animal, this.state.count);
    }
}

export default Form;