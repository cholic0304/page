import * as React from 'react'
// import logo from './logo.svg'
import { Modal, Button, Input } from 'antd'
import './App.less'

interface State {
  verified: boolean,
  showModal: boolean,
  imgs: Array<{
    name: string,
    url: string,
  }> | null
}

class Home extends React.Component<any, State> {
  constructor(props:any) {
    super(props)
    this.state = {
      verified: false,
      showModal: false,
      imgs: null,
    }
  }

  input: any

  showConfirm = () => {
    this.setState({
      showModal: true,
    })
  }

  handleVerifyAnswer = () => {
    if (this.input.value === '19910304') {
      this.setState({
        showModal: false,
        imgs: [
          {
            name: 'hotel',
            url: 'https://lh3.googleusercontent.com/rmlJ9LBrbV151z-WiCfxlaqktIEbZ-xaRwsiKxiZHuRp2ZsMkf_do2ShetcGSeS04x4l4us0kF3l0FREeQonDC7AThBEkaruKphvT4BJbxg1eIcVfL2bdlXQ6e_ivA4s1hPy-Sy2sV052ZC0ODPe_6o58fTGY-XDhVJmNyezBea4Fojn7izjOjCgn7gjq4DG_DORewihzk3NjNJbGYNQS6BpJdSTTvyLJKy-QjGpQd0mG9CEE1baeVjdQ0QbtWs5CVI19gq0N3S-KE-eNgV_ef5qoQt0dVOUai3jYUier4zQlMpe-ef_MQiHFp6ovPv94oCcDo9xebP0ZFmEueER7iGQdXg57haxluD5Stszkz-wcMkw4iVZihI94u-KAKwUfgIw0uPjgp3ICESPQ4fc-8XZOgsBXP1K48QzlyRVifBAYguTuSeyFQ6krVacHgqv3sp4H4aAUYojRjrR3bnh1p8BT0fOj2HvyG__hRkxEDCE26fTbszsvRCde_Ywgl6Ri0YItUuRstd3RZiynv0FbshC18CeQBtYHaB008JMcnK1-t5xNn1JkGRTnp1--1sX2whLOfEHK7c7trotisVLAAkuSXBN2Car3xWN8JFsLexk87ga2cPf3GMavW9T37tCC9yc-RoyeAw8cS55VPIgcAWNukSBD6LwHgqRG2Hlgb4t7iBBeMwi39i_RvGNau_ypj9-E1MY_o0m04dUUA=w2044-h1532-no'
          },
          {
            name: 'hotel',
            url: 'https://lh3.googleusercontent.com/rZy46gJhT8ejM2TCgWVUHs7eZlKWU4ReLUETwAyxc-7XcKfFwpPzn_wUkH8Z6G4zZbD7KlsvwVPMBfyLWbXnWheUHYGUn-ocjaFMZAQE0crNee-4LIpzxMJAvdJoUvmzmh26IMQzlS3k1QpOFm6_WXzTVUQCOJcnj6UcmJkjKtkWVjcAqLxuFeX4WA-TslV8jpGD5A7tNG5wes6fPu9xM_9Mq0VyIevR1z_9YyjIHlnTbg1528SIS1E8I2SvFYoSMxUoMcPElSLyTDncvTcZVhAGXiQxTJXQTbWm3bTkvgOR-y6x35VVG0h9biHU9m02rKW-ibXT6mubQDrQHjhq807Jhxf0Co5vuLYyaLjqt5z7SvhyXFmurjz3QD-ArdCXy8DXuFrlfc2JtOJwclmAWnSvnZwHgecftDAaFXNGjtDJSMvkKp4INsFoJtRM0opGLCvKEQgnc5zmeI8QNIHenuSz95Cc5As2-zXbf4Qy2okc9pICcG0uucwAvL1-EmRyqzrmG9WLEwsTprKgza_-d8HOZrmZhJ-8pjQmey6_H8x7_lwqlqYxl3tv83zEIsbfk_Lyai3EZpyV5AI906LIywzvYOUQBA=s2044-w2044-h1532-no'
          },
          {
            name: 'hotel',
            url: 'https://lh3.googleusercontent.com/rmlJ9LBrbV151z-WiCfxlaqktIEbZ-xaRwsiKxiZHuRp2ZsMkf_do2ShetcGSeS04x4l4us0kF3l0FREeQonDC7AThBEkaruKphvT4BJbxg1eIcVfL2bdlXQ6e_ivA4s1hPy-Sy2sV052ZC0ODPe_6o58fTGY-XDhVJmNyezBea4Fojn7izjOjCgn7gjq4DG_DORewihzk3NjNJbGYNQS6BpJdSTTvyLJKy-QjGpQd0mG9CEE1baeVjdQ0QbtWs5CVI19gq0N3S-KE-eNgV_ef5qoQt0dVOUai3jYUier4zQlMpe-ef_MQiHFp6ovPv94oCcDo9xebP0ZFmEueER7iGQdXg57haxluD5Stszkz-wcMkw4iVZihI94u-KAKwUfgIw0uPjgp3ICESPQ4fc-8XZOgsBXP1K48QzlyRVifBAYguTuSeyFQ6krVacHgqv3sp4H4aAUYojRjrR3bnh1p8BT0fOj2HvyG__hRkxEDCE26fTbszsvRCde_Ywgl6Ri0YItUuRstd3RZiynv0FbshC18CeQBtYHaB008JMcnK1-t5xNn1JkGRTnp1--1sX2whLOfEHK7c7trotisVLAAkuSXBN2Car3xWN8JFsLexk87ga2cPf3GMavW9T37tCC9yc-RoyeAw8cS55VPIgcAWNukSBD6LwHgqRG2Hlgb4t7iBBeMwi39i_RvGNau_ypj9-E1MY_o0m04dUUA=w2044-h1532-no'
          },
        ]
      })
    }
  }


  closeConfirm = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { imgs } = this.state

    return (
      <div className="home-container">
        <div className="portal">
          <Button onClick={this.showConfirm}>
            我要看照片
          </Button>
        </div>
        {
          imgs ? imgs.map((img) => (
            <div className="img-card">
              <img src={img.url} alt={img.name} />
            </div>
          )) : null
        }
        <Modal
          title={'那么问题来了'}
          onOk={this.handleVerifyAnswer}
          okText={'是的没错'}
          cancelText={'我再想想'}
          visible={this.state.showModal}
          onCancel={this.closeConfirm}
        >
          <div>
            <p>:密码是什么呢？</p>
            <Input ref={ele => this.input = ele} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Home
