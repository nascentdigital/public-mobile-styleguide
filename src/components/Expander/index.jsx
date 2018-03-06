import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  H3 from '../Headings/H3'
import  H5 from '../Headings/H5'
import  ExpandIcon  from '../Icons/ExpandIcon'

import './index.css'

class Expander extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
    this.toggleExpander = this.toggleExpander.bind(this)
  }

  toggleExpander() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      children,
      title,
      subtitle,
      className
    } = this.props
    const { open } = this.state
    return (
      <div className={`expander ${className}`}>
        <div>
          <button
            className="expander__button"
            onClick={() => this.toggleExpander()}
          >
            <ExpandIcon className open={open} />
            <div className="expander__label">
              <H3 className="expander__heading">{title}&nbsp;</H3>
              <H5 className="expander__subheading">{subtitle}</H5>
            </div>
          </button>
          <div
            className={`expander__content--${open ? 'open' : 'closed'}`}
            data-test-id="expander-content"
            open={open}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Expander.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  subtitle: PropTypes.string
}
export default Expander
