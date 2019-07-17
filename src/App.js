import React, { Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	
	componentDidMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyDlcQy6qjMBjuw90Lt0hMqfHT4mE37iXmE',
		    authDomain: 'authentication-491ab.firebaseapp.com',
		    databaseURL: 'https://authentication-491ab.firebaseio.com',
		    projectId: 'authentication-491ab',
		    storageBucket: '',
		    messagingSenderId: '1047052287027',
		    appId: '1:1047052287027:web:763eb3b3896429d1'
		  });

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return(
				<Button>
					Log Out
				</Button>
				);
			case false:
				return <LoginForm></LoginForm>;
			default:
				return <Spinner size="large"></Spinner>
		}
		if (this.state.loggedIn) {
			
		}

		
	}
	
	render() {
		return (
			<View>
				<Header headerText="Authentication!!"></Header>
				{ this.renderContent() }
			</View>
			);
	}
}

export default App;