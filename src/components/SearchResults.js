import React, { Component } from 'react';

class SearchResults extends Component{
    
    formatData(){
        var content = this.props.albumsData;
    
        return Object.keys( content ).map( album => {
            var current = content[album];
            return (
                <tbody key={ album }>    
                    <tr>
                        <td><img src={ current.artworkUrl60 }/></td>
                        <td><p>{ current.trackId }</p></td>
                        <td><p>{ current.trackName }</p></td>
                        <td><p>{ current.collectionName }</p></td>
                        <td><p>{ current.primaryGenreName }</p></td>
                        <td><p>{ current.currency + " " + current.collectionPrice }</p></td>
                    </tr>                  
                </tbody>
            );
        });
    }

    render(){

        const css = {
            width: 'auto'
        }

        if( this.props.albumsData ){
            return(
                
                <div>
                    <div className="table-responsive">
                        <table style={ css } className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Art</th>
                                    <th>Track ID</th>
                                    <th>Track Name</th>
                                    <th>Collection Name</th>
                                    <th>Genre</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            { this.formatData() }
                        </table>
                    </div>
                </div>
            );
        }

        return null;
        
    }

}

export default SearchResults;