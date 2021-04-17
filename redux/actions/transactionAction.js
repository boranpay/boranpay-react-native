import {
    GET_ALL_TRANSACTIONS_USER
} from './rootAction'
import axios from 'axios'


export const loadAllTransactionUser = (user) => async (dispatch) => {

    await axios.get(`http://localhost:8080/api/transaction/user/${user}`)
        .then((response) => (
            dispatch({
                type: GET_ALL_TRANSACTIONS_USER,
                payload: response.data
            }))

        ).catch(error => console.error(error))
}
