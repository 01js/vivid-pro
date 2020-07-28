import React, { useState } from 'react'
import { Layout } from 'antd'
import DocumentTitle from 'react-document-title'
import Copyright from './components/Copyright'

import './App.css';

const { Content, Footer } = Layout

const App: React.FC = () => {
  const [ title ] = useState('')
    return (
      <DocumentTitle title={title}>
        <Layout>
          <Content className="app-layout-content">
          </Content>
          <Footer className="app-layout-foot">
            <Copyright />
          </Footer>
        </Layout>
        
      </DocumentTitle>
    )
}

export default App