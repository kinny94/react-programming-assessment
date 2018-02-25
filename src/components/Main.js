import React, { Component } from 'react';
import Search from './Search';
import fetchAlbums from '../api/fetchAlbums';
import SearchResults from './SearchResults';
import {VelocityComponent} from 'velocity-react'

require('velocity-animate');
require('velocity-animate/velocity.ui');

class Main extends Component{

    state = { 'isLoading': '', albumData: '', heading: 'Search for any artist!!!' };
    

    getInitialState = () => {
        return {
            isLoading: false
        }
    }

    changeHeading( artist){

        console.log( artist );
        this.setState({
            heading: `Showing results for ${ artist }..`
        });
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

        var animations;
        if( this.state.albumData === ""){
            animations = {
                animation: {
                    duration: 5000,
                    translateY: 300           
                }
            };    
        }else{
            animations = {
                animation: {
                    duration: 5000,
                    translateY: 0,
                    easing: "easeInSine"           
                }
            };
        }

        console.log( this.state );

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
                <VelocityComponent  { ...animations }>
                    <div>
                        <h1 className="heading-padding">{ this.state.heading }</h1>
                        <Search onSearch={ this.handleSearch } handleHeading={ this.changeHeading.bind(this) }/>
                    </div>
                </VelocityComponent>
                <div>
                    { renderMessage() }
                </div>
            </div>
        )
    }
}

export default Main;