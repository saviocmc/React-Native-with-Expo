import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();

export function log(message: any) {
    if (Reactotron.log) { Reactotron.log(message); }
}

export function debug(message: any) {
    if (Reactotron.debug) { Reactotron.debug(message); }
}

export function warn(message: any) {
    if (Reactotron.warn) { Reactotron.warn(message); }
}

export function error(message: any, stack: any){
    if (Reactotron.error) { Reactotron.error(message, stack); }
}