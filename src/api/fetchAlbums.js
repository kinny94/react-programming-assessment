var axios = require( 'axios' );

const ITUNES_ALBUMS_DATA = 'https://itunes.apple.com/search?term=';

module.exports = {

    getArtistAlbums( artist ){
        var encodedArtist = encodeURIComponent( artist );
        var requestUrl = `${ ITUNES_ALBUMS_DATA }${ encodedArtist }`;

        return axios.get( requestUrl ).then(( res ) => {

            if( res.data ){
                var albums = res.data.results;
                return albums;
            }else{
                throw new Error( res.data.message );
            }
        }, ( res ) => {
            throw new Error( res.data.message );
        });
    }
}

