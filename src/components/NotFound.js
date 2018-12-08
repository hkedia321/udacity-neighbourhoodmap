import React, {Component} from 'react';
import Notfound from '../images/notfound.png';

export default class NotFound extends Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
		    <img src={Notfound} alt='404' style={{"max-width":"90%"}}  />
			    <h2>The page you are trying to access doesn&apos;t exist.</h2>
			</div>
        )
	}
}
