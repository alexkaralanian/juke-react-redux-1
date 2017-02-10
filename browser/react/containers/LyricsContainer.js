
import React from 'react';
import store from '../store';
import Lyrics from '../components/lyrics';
import axios from 'axios';
import {setLyrics} from '../action-creators/lyrics'

class LyricsContainer extends React.Component {

	constructor(){
		super()
			this.state = Object.assign({
				text: '',
				artistQuery: '',
				songQuery: ''
			}, store.getState());

			this.artistSearchInput = this.artistSearchInput.bind(this)
			this.songSearchInput = this.songSearchInput.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
	}

	// lifecycle hooks
	componentDidMount() {
		// subscribes the component to the stores updates
		// kind of like an event listener?
		// Event is any change ot the store
		// Returns a function that will unsubscribe listener, undo what you just did
	   this.unsubscribe = store.subscribe(() => {
	     this.setState(store.getState());
	   });
	}

	componentWillUnmount() {
		// garbage collection
		this.unsubscribe();
	}

	artistSearchInput(artist){
		this.setState({ artistQuery: artist })
	}

	songSearchInput(song){
		this.setState({ songQuery: song })
	}

    handleSubmit(event){
    	event.preventDefault()

    	if (this.state.artistQuery && this.state.songQuery) {
			axios.get(`/api/lyrics/${ this.state.artistQuery }/${ this.state.songQuery }`)
			.then(function(res){
				store.dispatch(setLyrics(res.data.lyric))
			})
		}
    }

	render() {
		return (
			<Lyrics
				text = { this.state.text }
				setArtist = { this.artistSearchInput }
				setSong = { this.songSearchInput }
				artistQuery = { this.state.artistQuery }
				songQuery = { this.state.songQuery }
				handleSubmit = { this.handleSubmit }
			/>
		);
	}

}

export default LyricsContainer;
