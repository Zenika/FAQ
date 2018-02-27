import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { graphql } from 'react-apollo'

import { getAllNodes } from './queries'

import { flags, search } from 'services'

import Button from 'react-toolbox/lib/button/Button'
import Tooltip from 'react-toolbox/lib/tooltip/Tooltip'
import Pluralize from 'react-pluralize'

import Loading from 'components/Loading'

import Searchbar from './components/Searchbar'
import NodeCard from './components/NodeCard'

import './style.css'

const TooltipButton = Tooltip()(Button)

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
      nodes: null
    }
  }

  handleSearchChange (value) {
    this.setState({ searchText: value })

    if (value !== '') {
      const onSearchSuccess = nodes => {
        this.setState({ nodes })
      }

      search.simpleQuery(value, onSearchSuccess.bind(this))
    } else {
      this.setState({ nodes: null })
    }
  }

  render () {
    const { searchText, nodes } = this.state
    const { loading, error, allZNodes } = this.props.data

    if (loading) {
      return <Loading />
    }

    if (error) {
      return <div>Error :(</div>
    }

    const list = nodes || allZNodes

    const NodeCards = list.map(node => {
      return (
        <NodeCard node={node} key={node.id} style={{ marginBottom: '1rem' }} />
      )
    })

    let Results

    if (searchText === '') {
      Results = (
        <div>
          <p className="indication">Latest question</p>
          {NodeCards}
        </div>
      )
    } else if (list.length === 0) {
      Results = (
        <p className="indication" style={{ textAlign: 'center' }}>
          Nothing found &nbsp;<i className="material-icons">sms_failed</i>
        </p>
      )
    } else {
      Results = (
        <div>
          <p className="indication">
            <Pluralize singular="result" count={list.length} /> found
          </p>
          {NodeCards}
        </div>
      )
    }

    return (
      <div className="Home">
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            alt=""
            src="/img/favicon/favicon-64.png"
            style={{ height: '30px', marginRight: '10px' }}
          />
          FAQ Zenika
        </h1>
        {flags.search && (
          <Searchbar
            text={searchText}
            search={this.handleSearchChange.bind(this)}
            style={{ marginTop: '3rem', marginBottom: '2rem' }}
          />
        )}
        <div>{Results}</div>
        {flags.question.new && (
          <Link to="/q/new">
            <TooltipButton
              icon="add"
              tooltip="Ask a new question"
              floating
              accent
              mini
              style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem'
              }}
            />
          </Link>
        )}
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(getAllNodes)(Home)
