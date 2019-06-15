import Taro, { Component } from '@tarojs/taro'
import { View ,Input,Image,Icon,Button} from '@tarojs/components'
import titleImg from "../../assets/img/mindVoice1.png"
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '跳转成功',
  }

  constructor (){
    super(...arguments);
    this.state={
      // titleImg:require()
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Image className='imgTitle' src={titleImg}></Image>
        <View className='searchContain'>
          <Input className='searchInput' type='number' placeholder='请输入房间号' maxLength={3} focus/>
          <Icon className='icon' size='20' type='search' />
        </View>
        <View className='button'><Button type='default' size='mini' >点击进入</Button></View>
      </View>
    )
  }
}
