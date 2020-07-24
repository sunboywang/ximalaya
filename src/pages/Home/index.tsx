import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator/index';
import Carousel from './Carousel';
import {RootState} from '@/models/index';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };
  asyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 3,
      },
    });
  };
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  render() {
    const {num, loading} = this.props;
    return (
      <View>
        <Carousel />
        <Text>Home{num}</Text>
        <Text>{loading ? '正在努力加载中！！' : ''}</Text>
        <Button title="加" onPress={this.handleAdd} />
        <Button title="异步加" onPress={this.asyncAdd} />
        <Button title="中转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
