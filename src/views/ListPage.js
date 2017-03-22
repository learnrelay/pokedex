import React from 'react'
import classes from './ListPage.css'

export default class ListPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }
  render () {
    return (
      <div className={classes.root}>
        I am a REACT app!
      </div>
    )
  }
}

