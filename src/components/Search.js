import React, { Component } from 'react';

class Search extends Component{

    constructor(props) {
        
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if( this.state.value.length > 0 ){
            this.props.onSearch( this.state.value );
            this.setState({
                value: ''
            });
        }
    }

    render(){

        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.value } onChange={ this.handleChange }/>
                    <button type="submit">Get Albums!!</button>
                </form>
            </div>
        )
    }
}   

export default Search;