import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { getTransfer } from '../../redux/actions/transferAction';
import { connect } from 'react-redux';

// Component
import Balance from './Component/Balance';
import Header from './Component/Header';
import ListTransfer from './Component/ListTransfer';

import styles from './styles';
class Wallet extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getTransfer();
	}

	render() {
		const { transfer } = this.props;
		const { balance, admin, sent, receive } = transfer;
		return (
			<>
				{Object.keys(transfer).length === 0 ? null : (
					<View style={styles.container}>
						<Header
							style={{ flex: 0.08 }}
							navigation={this.props.navigation}
							balance={balance}
						/>
						<Balance
							balance={balance}
							admin={admin}
							style={styles.balanceView}
						/>
						<ListTransfer style={{ flex: 0.35 }} type={'SENT'} data={sent} />
						<ListTransfer
							style={{ flex: 0.35 }}
							type={'RECEIVE'}
							data={receive}
						/>
					</View>
				)}
			</>
		);
	}
}

const mapActionsToProps = {
	getTransfer,
};

const mapStateToProps = (state) => ({
	transfer: state.transferReducer.transfer,
});

export default connect(mapStateToProps, mapActionsToProps)(Wallet);
