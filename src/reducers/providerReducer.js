const initialState = {
  providerSchedules: {
    // by provider ID
    0: {
      providerID: 0,
      providerName: '',
      schedule: [],
      reservations: []
    },
    1: { 
      providerID: 1,
      providerName: '',
      schedule: [],
      reservations: []
    },
    2: { 
      providerID: 2,
      providerName: '',
      schedule: [],
      reservations: []
    },
    3: { 
      providerID: 3,
      providerName: '',
      schedule: [],
      reservations: []
    },
    4: { 
      providerID: 4,
      providerName: '',
      schedule: [],
      reservations: []
    },
    5: { 
      providerID: 5,
      providerName: '',
      schedule: [],
      reservations: []
    },
  },
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_PROVIDER_SCHEDULE':
      console.log('in provider submit reducer action: ', action);
      return {
        ...state,
        providerSchedules: {
          ...state.providerSchedules,
          [action.payload.providerID]: {
            ...state.providerSchedules[action.payload.providerID],
            schedule: [
              ...state.providerSchedules[action.payload.providerID].schedule,
              ...action.payload.schedule,
            ]
          }
        }
      }
    
    case 'SAVE_RESERVATION':
      return {
        ...state,
        providerSchedules: {
          ...state.providerSchedules,
          [action.payload.providerID]: {
            ...state.providerSchedules[action.payload.providerID],
            reservations: [
              ...state.providerSchedules[action.payload.providerID].reservations,
              {
                clientID: action.payload.clientID,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
              }
            ]
          }
        }
      }
    default:
      return state;
  }
}

export default providerReducer;











//   providerData: {
//     0: {
//       name: 'Provider ID 0',
//       schedule: [],
//     },
//     1: {
//       name: 'Provider ID 1',
//       schedule: []
//     },
//     2: {
//       name: 'Provider ID 2', 
//       schedule: [],
//     }
//   }
// };



// action
// {type: 'SUBMIT_PROVIDER_SCHEDULE', payload: {…}}
// payload
// : 
// {id: null, schedule: Array(1)}
// type
// : 
// "SUBMIT_PROVIDER_SCHEDULE"

/*

payload = {
  providerID: 0,
  schedule: [
    { startTime: 1, endTime: '123', date: 123 }
  ]
}

*/
//   providerData: {
//     0: { // first level 
//       name: 'Provider ID 0', // second level
//       schedule: [], // third level
//     },
//     1: {
//       name: 'Provider ID 1',
//       schedule: []
//     },
//     2: {
//       name: 'Provider ID 2', 
//       schedule: [],
//     }
//   }
// };

// const initState = {
//   firstLevel: {
//       secondLevel: {
//           thirdLevel: {
//               property1: ...,
//               property2: [...]
//           },
//           property3: ...
//       },
//       property4: ...
//   }
// }

// export nestedProviderReducer(state, action){
//   return {
//       ...state,
//       schedule: [
//           ...state.schedule,
//           schedule: action.schedule
//       }
//   }
// }

// export function rootLevelReducer(state, action){
//   return {
//       ...state,
//       firstLevel: {
//           ...state.firstLevel,
//           schedule: nestedProviderReducer(state.firstLevel.secondLevel, action)
//       }
//   }
// }



// const providerReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SUBMIT_PROVIDER_SCHEDULE':
//       // console.log('in provider submit reducer action: ', action);
//       return {
//         ...state,
//         providerData: {



//           // ...state.providerData,
//           // [state.providerData[action.payload.providerID]]: {
//           //   // ...state.providerData[action.payload.providerID]
//           //   schedule: [
//           //     ...state.providerData[action.payload.providerID].schedule,
//           //     action.payload.schedule,
//           //   ]
//           // }


//           // currentDrink: {
//           //   ...state.currentDrink,
//           //   ...action.payload
//           // }
//           // ...state.providerData,
//           // [id]: {
//           //   schedule: [
//           //     ...state.providerData[id].schedule,
//           //     schedule,
//           //   ]
//           // }
//         }




//         // ...state,
//         // [providerData]: [
//         //   ...state.providerData,
//         //   action.payload
//         // ]
//       }
//     default:
//       return state;
//   }
// }

// export default providerReducer;