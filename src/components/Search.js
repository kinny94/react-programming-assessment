import React, { Component } from 'react';
import './search.css';

class Search extends Component{

    constructor(props) {
        
        super(props);
        this.state = {value: '', initialState: true };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        var handleUpdate = this.props.handleHeading;
        handleUpdate( this.state.value );

        if( this.state.value.length > 0 ){
            this.props.onSearch( this.state.value );
            this.setState({
                value: ''
            });
        }
    }

    render(){
        
        return(
            <div id="animate">
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-group">
                        <input className="form-control form-control-lg" placeholder="Search for an artist..." type="text" value={ this.state.value } onChange={ this.handleChange }/>
                        <span className="input-group-btn">
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fas fa-2x fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}   

export default Search;