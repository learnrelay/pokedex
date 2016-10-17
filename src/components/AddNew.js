import React from 'react'
import classes from './AddNew.css'

export default class AddNew extends React.Component {

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

