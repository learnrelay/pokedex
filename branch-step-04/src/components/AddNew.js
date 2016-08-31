import React from 'react'
import { withRouter } from 'react-router'
import classes from './AddNew.css'

class AddNew extends React.Component {

  render () {
    return (
      <div className={classes.link}>
        <div className={classes.page}>
          <div className={classes.plus}>
            +
          </div>
          <div className={classes.title}>
            Add New
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AddNew)
