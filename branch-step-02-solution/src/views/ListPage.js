import React from 'react'
import Relay from 'react-relay'
import {withRouter} from 'react-router'
import classes from './ListPage.css'

class ListPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }
  render () {
    return (
      <div className={classes.root}>
        {`Your viewer id is: ${this.props.viewer.id}`}
      </div>
    )
  }
}

export default Relay.createContainer(
  withRouter(ListPage),
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          id
        }
      `,
    },
  },
)
