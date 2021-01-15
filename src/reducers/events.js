import _ from "lodash"
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "../actions"

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // console.log('READ_EVENT', data)
      return {...events, [data.id]: data}

    case READ_EVENTS:
      // console.log(_.mapKeys(action.response.data, "id"))
      return _.mapKeys(action.response.data, "id")

    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
      // return events // こちらでも同様に動作しているように見える。

    default :
      return events
  }
}