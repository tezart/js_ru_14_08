import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PART_OF_COMMENTS, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_PART_OF_COMMENTS + SUCCESS: 
            //state.set('entities', arrToMap(response.records, CommentRecord))
            //console.log('STATE ', state.set('entities', arrToMap(response.records, CommentRecord)));
            return state.set('entities', arrToMap(response.records, CommentRecord))
        
    }

    return state
}