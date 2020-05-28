import {CHANGE_TOKEN} from './mutations-type'

export default {
  [CHANGE_TOKEN](state) {
    state.token = 'this is token222'
  },
}
