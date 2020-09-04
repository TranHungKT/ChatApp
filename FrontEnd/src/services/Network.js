import NetInfo from '@react-native-community/netinfo';

class Network {
  async checkNetwork() {
    const netStatus = await NetInfo.fetch();
    if (!netStatus.isConnected) {
      return false;
    } else {
      return true;
    }
  }
}
export default new Network();
