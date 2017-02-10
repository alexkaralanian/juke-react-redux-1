import React from 'react';

const Lyrics = (props) => {

	const artistSearchInput = function(input) {
		return props.setArtist(input.target.value)
	}

	const songSearchInput = function(input) {
		return props.setSong(input.target.value)
	}

	return (

		<div id="lyrics">
			<form onSubmit={props.handleSubmit}>
			  <div>
			  	<h4>Search For Artist</h4>
			  	<input value={props.artistQuery} onChange={ artistSearchInput } placeholder="Artist" className="form-control" type="text" name="searchArtist" />
			  </div>

			  <div>
			  	<h4>Search For Song</h4>
			  	<input value={props.songQuery} onChange={ songSearchInput } placeholder="Song" className="form-control" type="text" name="artistSong" />
			  </div>

			  <pre>{props.text || 'Search above!'}</pre>
			  <button type="submit" className="btn btn-primary">SUBMIT</button>

			</form>
		</div>
	)
}

export default Lyrics;
