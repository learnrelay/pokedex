import React from 'react'
import {Link} from 'react-router'
import classes from './AddNew.css'

export default class AddNew extends React.Component {

  render () {
    return (
      <Link to='/create' className={classes.link}>
        <div className={classes.page}>
          <div className={classes.plus}>
            +
          </div>
          <div className={classes.title}>
            Add New
          </div>
        </div>
      </Link>
    )
  }
}
