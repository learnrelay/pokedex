import React from 'react'
import Relay from 'react-relay'
import { Link } from 'react-router'
import classes from './PokemonPreview.css'

class PokemonPreview extends React.Component {

  static propTypes = {
    pokemon: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  render () {
    return (
      <Link className={classes.link} to={`/view/${this.props.pokemon.id}`}>
        <div className={classes.previewPage}>
          <img className={classes.previewImg} src={this.props.pokemon.url} alt='Pokemon Image' />
          <div className={classes.previewName}>
            {this.props.pokemon.name}
          </div>
        </div>
      </Link>
    )
  }
}

export default Relay.createContainer(
  PokemonPreview,
  {
    fragments: {
      pokemon: () => Relay.QL`
        fragment on Pokemon {
          id
          name
          url
        }
      `,
    },
  }
)
