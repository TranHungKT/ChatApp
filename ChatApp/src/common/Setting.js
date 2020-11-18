import _EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import _Timer from 'react-timer-mixin';
import Config from './Config';

export const EventEmitter = new _EventEmitter();
export const Timer = _Timer;

export const toast = (msg, duration = 4000) => {
  EventEmitter.emit(Config.EmitCode.Toast, msg, duration);
};
