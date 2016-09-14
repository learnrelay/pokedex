import React from 'react'
import { withRouter } from 'react-router'
import classes from './ListPage.css'

class ListPage extends React.Component {
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

export default withRouter(ListPage)

