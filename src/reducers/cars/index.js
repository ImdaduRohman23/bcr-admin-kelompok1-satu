import { GET_CAR_LIST } from "../../actions/carsAction";

const initialState = {
    getListCarResult: false,
    getListCarLoading: false,
    getListCarError: false

}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAR_LIST:
            return {
                ...state,
                getListCarResult : action.payload.data,
                getListCarLoading : action.payload.loading,
                getListCarError : action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default cars
