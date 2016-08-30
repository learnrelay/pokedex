import Relay from 'react-relay'

export default class DeletePokemonMutation extends Relay.Mutation {

  getMutation () {
    return Relay.QL`mutation{deletePokemon}`
  }

  getFatQuery () {
    return Relay.QL`
    fragment on DeletePokemonPayload {
      viewer
      deletedId
    }
    `
  }

  getConfigs () {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewerId,
      connectionName: 'pokemon',
      deletedIDFieldName: 'deletedId',
    }]
  }

  getVariables () {
    return {
      id: this.props.pokemonId,
    }
  }
}

