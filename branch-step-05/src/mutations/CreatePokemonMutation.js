import Relay from 'react-relay'

export default class CreatePokemonMutation extends Relay.Mutation {

  static fragments = {

  }

  getMutation () {

  }

  getFatQuery () {

  }

  getConfigs () {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'allPokemons',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'append',
      },
    }]
  }

  getVariables () {

  }
}
