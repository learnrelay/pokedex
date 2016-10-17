import React from 'react'
import Relay from 'react-relay'
import PokemonCard from '../components/PokemonCard'
import CreatePokemonMutation from '../mutations/CreatePokemonMutation'
import deleteIcon from '../assets/delete.svg'
import classes from './PokemonPage.css'

class PokemonPage extends React.Component {

  static propTypes = {
    viewer: React.PropTypes.object,
    router: React.PropTypes.object,
    params: React.PropTypes.object,
  }

  constructor (props) {
    super(props)
    this.state = {
      name: this._isAddNew() ? '' : this.props.viewer.Pokemon.name,
      url: this._isAddNew() ? '' : this.props.viewer.Pokemon.url,
    }
  }

  _isAddNew = () => {
    return !this.props.params.hasOwnProperty('id')
  }

  _addPokemon = () => {
    Relay.Store.commitUpdate(
      new CreatePokemonMutation({name: this.state.name, url: this.state.url, viewer: this.props.viewer}),
      {
        onSuccess: () => this.props.router.push('/'),
        onFailure: (transaction) => console.log(transaction),
      },
    )
  }

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <PokemonCard
            addNew={this._isAddNew()}
            name={this.state.name}
            url={this.state.url}
            onNameChange={(newName) => this.setState({name: newName})}
            onUrlChange={(newUrl) => this.setState({url: newUrl})}
          />
          <div className={classes.buttonContainer}>
            <div>
              {!this._isAddNew() &&
                <img src={deleteIcon} className={classes.deleteIcon} />
              }
            </div>
            <div className={classes.actionButtonContainer}>
              <div
                className={classes.button + ' ' + classes.cancelButton}
                onClick={() => this.props.router.push('/')}
              >
                Cancel
              </div>
              <div
                className={classes.button + ' ' + classes.saveButton}
                onClick={this._addPokemon}
              >
                {this._isAddNew() ? 'Add' : 'Save'}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Relay.createContainer(
  PokemonPage,
  {
    initialVariables: {
      id: null,
      pokemonExists: false,
    },
    prepareVariables: (prevVariables) => Object.assign({}, prevVariables, {
      pokemonExists: prevVariables.id !== null,
    }),
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          id
          ${CreatePokemonMutation.getFragment('viewer')}
          Pokemon(id: $id) @include( if: $pokemonExists ) {
            id
            name
            url

          }
        }
      `,
    },
  },
)
