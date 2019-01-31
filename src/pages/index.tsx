import React from 'react'
import { Row, Col, Layout, Menu, Icon } from 'antd'
import { connect } from 'redux-zero-x'
import './index.css'

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

@connect('CommonStore')
export default class App extends React.Component<any, any> {

  render () {
    const menuList = [
      {
        url: 'home',
        name: 'home',
      }
    ]
    return (
      <Layout id={'view-container'}>
        <Content>
          <div id="content-container">{this.props.children}</div>
        </Content>
      </Layout>
    )
  }
}
