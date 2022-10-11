const actionTypes = {
   setInitialState: "setInitialState"
}

const initialState = {
   userInfo: {},
   isLoggedIn: false,
   allData: {}
}

const reducer = (state, action) => {
   const { setInitialState } = actionTypes;
   switch (action.type) {
      case setInitialState:
         return {
            ...state,
            userInfo: { ...action.payload }
         }
      default: return { ...state }
   }
}

export { actionTypes, initialState, reducer }