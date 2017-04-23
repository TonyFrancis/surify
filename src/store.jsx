// reducers function for activity

function activityStore(state = [], action) {
  switch (action.type) {
    case 'ADD_EVENT':
      const newState = [...state, { value: action.event }];
      return newState;
    default:
      return state;
  }
}

export default activityStore;
