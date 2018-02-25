import React, { Component } from 'react';

class SearchResults extends Component{
    
    formatData(){
        var content = this.props.albumsData;
    
        return Object.keys( content ).map( album => {
            var current = content[album];
            console.log( current );
            return (
                <div key={ album }>                    
                    <img src={ current.artworkUrl60 }/>
                    <p>{ current.trackId }</p>
                    <p>{ current.trackName }</p>
                    <p>{ current.collectionName }</p>
                    <p>{ current.primaryGenreName }</p>                    
                    <p>{ current.currency + " " + current.collectionPrice }</p>                    
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                { this.formatData() }
            </div>
        );
    }

}

export default SearchResults;