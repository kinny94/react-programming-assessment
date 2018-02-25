import React, { Component } from 'react';
import Search from './Search';
import fetchAlbums from '../api/fetchAlbums';
import SearchResults from './SearchResults';


class Main extends Component{

    state = { 'isLoading': '', albumData: '' };
    

    getInitialState = () => {
        return {
            isLoading: false
        }
    }

    handleSearch = ( artist ) => {
        
        this.setState({
            isLoading: true
        });

        fetchAlbums.getArtistAlbums( artist ).then(( albums ) => {

            this.setState({
                albumData: albums,
                isLoading: false
            });

        }, ( errorMessage ) => {
            this.setState({
                isLoading: false
            });
            
            console.log( errorMessage );
        });
    }

    render(){

        var { isLoading, albumData } = this.state;

        function renderMessage(){
            if( isLoading ){
                return <h1>Fetching Data...</h1>
            }else{
                return <SearchResults albumsData={ albumData } />
            }
        }

        return(
            <div>
                <h1>You are in Main Component</h1>
                <div>
                    <Search onSearch={ this.handleSearch }/>
                </div>
                <div>
                    { renderMessage() }
                </div>
            </div>
        )
    }
}

export default Main;