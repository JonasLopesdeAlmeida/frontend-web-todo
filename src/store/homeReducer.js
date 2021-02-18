
import api from '../services/api';
import isConnected from '../utils/isConnected';



const ACTIONS = {
    LOAD: 'LOAD_TASKS'
}

const INITIAL_STATE ={
    tasks: []

}


export const homeReducer = (state = INITIAL_STATE , action) => {
   
    switch (action.type) {
        case ACTIONS.LOAD:
            return{...state, tasks: action.tasks, }
        default:
            return state;
    }

}

    export  function load(filterActived){
      return async dispatch => {
        await api.get(`/task/filter/${filterActived}/${isConnected}`)
          .then(response => { 
              dispatch({
                  type: ACTIONS.LOAD,
                  tasks: response.data
              })
           })
        }

    }







