import React, { Component, FC } from 'react';



const logProps = (WrappedComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      console.log('Component is rendered')
    }
    render() {
      return <WrappedComponent/ >
    }
  }
}

export default logProps