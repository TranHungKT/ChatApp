import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { getTransfer } from '../../redux/actions/transferAction';
import { connect } from 'react-redux';
class Wallet extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getTransfer();
	}

	render() {
		return (
			<View>
				<Text> Wallet </Text>
			</View>
		);
	}
}

const mapActionsToProps = {
	getTransfer,
};

const mapStateToProps = (state) => ({
	transfer: state.transferReducer,
});

export default connect(mapStateToProps, mapActionsToProps)(getTransfer);
