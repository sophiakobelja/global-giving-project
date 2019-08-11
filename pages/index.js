import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import GlobalGivingMap from './GlobalGivingMap'
import ContainerDimensions from 'react-container-dimensions'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      //configure Redux store
      <Provider store={store}>
        {/*Container Dimensions is a React library that allows you to access container width&height*/}
        <ContainerDimensions> 
          <GlobalGivingMap />
        </ContainerDimensions>
      </Provider>
    )
  }
}