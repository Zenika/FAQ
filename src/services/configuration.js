import React, { Component } from 'react'
import PropTypes from 'prop-types'

import routing from './routing'

import { Loading } from 'components'

class Configuration {
  _isLoaded = false

  constructor() {
    if (localStorage.configuration) {
      this.setData(JSON.parse(localStorage.configuration))
    }
  }

  setData(data) {
    Object.entries(data).map(([name, value]) => (this[name] = value))
    this._isLoaded = true
    localStorage.configuration = JSON.stringify(data)
  }

  async load() {
    const response = await fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT + '/configuration', {
      headers: { 'prisma-service': routing.getPrismaService() }
    })
    if (!response.ok) {
      throw new Error(
        `Error response from server while retrieving configuration: HTTP status ${response.status}`
      )
    }
    const configuration = await response.json()
    this.setData(configuration)
  }

  isLoaded() {
    return this._isLoaded
  }
}

const configuration = new Configuration()

class ConfigurationProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: configuration.isLoaded(),
      error: null
    }
  }
  componentDidMount() {
    if (!configuration.isLoaded()) {
      // If no configuration is loaded, load configuration and refresh
      configuration
        .load()
        .then(() => this.setState({ loaded: true }))
        .catch(err => this.setState({ error: err }))
    } else {
      // Else, load the configuration in the background anyway
      configuration.load()
    }
  }
  render() {
    if (this.state.error) {
      return <span>Error :(</span>
    }
    if (!this.state.loaded) {
      return <Loading text="Retrieving configuration..." />
    }
    return this.props.children
  }
}

ConfigurationProvider.propTypes = {
  children: PropTypes.node
}

export default configuration

export { ConfigurationProvider }
