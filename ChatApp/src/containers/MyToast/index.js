import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	LayoutAnimation,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Config, Styles } from '@common';
import { EventEmitter, Timer } from '@common/Setting';
import { addToast, removeToast } from '../../redux/actions/toastAction';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: Styles.height / 10, // padding bottom
		left: Styles.width / 20,
		right: Styles.width / 20, // padding horizontal
		alignItems: 'center',
		zIndex: 9999,
	},
	textWrap: {
		backgroundColor: 'rgba(60,60,60,0.9)',
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		marginTop: 5,
	},
	text: {
		color: '#FFFFFF',
		textAlign: 'center',
	},
});

class MyToast extends React.Component {
	constructor(props) {
		super(props);
		this.nextToastId = 0;
		this.renderToast = this.renderToast.bind(this);
	}

	componentDidMount() {
		this.toastListener = EventEmitter.addListener(
			Config.EmitCode.Toast,
			this.doToast.bind(this)
		);
	}

	componentWillUnmount() {
		this.toastListener.remove();
	}

	shouldComponentUpdate() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		return true;
	}

	render() {
		const { toast } = this.props;
		return (
			<View style={styles.container}>{toast.list.map(this.renderToast)}</View>
		);
	}

	renderToast(msg, index: number) {
		const { removeToast } = this.props;
		const onPress = () => this.props.removeToast(msg.key);
		return (
			<TouchableOpacity key={index} style={styles.textWrap} onPress={onPress}>
				<Text style={styles.text}>{msg.msg}</Text>
			</TouchableOpacity>
		);
	}

	doToast(msg, duration = 4000) {
		// const {addToast, removeToast} = this.props;
		const key = this.nextToastId++; // unique message key
		this.props.addToast(msg, key);
		Timer.setTimeout(() => this.props.removeToast(key), duration);
	}
}

const mapActionsToProps = {
	addToast,
	removeToast,
};
const mapStateToProps = (state) => ({
	toast: state.toastReducer,
});

export default connect(mapStateToProps, mapActionsToProps)(MyToast);
