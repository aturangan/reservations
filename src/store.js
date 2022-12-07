import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

let defaultState = {
  providerData:
    // hard coded for mock purposes
    [
      {
        id: 0,
        name: 'ID 0 Provider 0',
        schedule: [
          // { startTime: 1, endTime: 2, date: 123 }  
        ]

        // schedule: {
        //   timeRangeID0: {
        //     startTime: 1,
        //     endTime: 8,
        //   }, // make sure doesn't overlap with next appt
        //   timeRangeID1: {
        //     startTime: 5,
        //     endTime: 1
        //   }
        // },

        // reservedAppts: [
        //   {
        //     appointmentID: 0, 
        //     clientID: 0,
        //   }
        // ]

        // reservedAppts: {
        //   apptID1: {
        //     clientID: 123,
        //     startTime: 1,
        //     endTime: 5,
        //   },
        //   apptID2: {
        //     clientID: 456,
        //     startTime: 3,
        //     endTime: 12
        //   }
        // }
      }
    ],
  appointments: [
    {
      clientID: 0, 
      providerID: 0,
      appointments: [1, 2, 3]// [apptID0, apptID1, apptID2]
    }
  ]
};

const store = configureStore({ reducer: rootReducer }, {defaultState: 'test'});

export default store;

  //   0: {
  //     name: '(ID: 0) Provider 0',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //     /*
  //     {
  //       reservedAppts: {
  //         apptID1: clientID1,
  //         apptID2: clientID2
  //       }
  //       clientID: 123,
  //     }
  //   }, 
  //   1: {
  //     name: '(ID: 1) Provider 1',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //   },
  //   2: {
  //     name: '(ID: 2) Provider 1',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //   },
  //   3: {
  //     name: '(ID: 3) Provider 1',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //   },
  //   4: {
  //     name: '(ID: 4) Provider 4',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //   },
  //   5: {
  //     name: '(ID: 5) Provider 5',
  //     overallAvailability: null,
  //     reservedAppts: null,
  //   }
  // },




/*
  edge cases:
    provider can have availability until 1am next day 
      have to make sure there are no duplicates between an appt at 12-12:30am 1/1
      and 12:15am-12:45am 1/2

    provider can schedule multiple time ranges on the same day 

    have to block out 30 min after start of appointment and grey out availability on provider's schedule

    certain clients might only have access to certain providers, singular or multiple

    one client books multiple appointments on the same day? allowed or not?

    holidays, time zones, etc

    handle emergency appointments where last minute scheduling is ok?

    ability to cancel and reschedule appointments

  providers:
    (ID): {
      name: 'provider 0', 
      overallAvailability: {
        date0: [ (based on start date, doesn't matter if working till next time 3am etc)
          {
            startTime: 7am,
            endTime: 3pm
          },
          {
            startTime: 9pm,
            endTime: 1am
          }
        ],

        date1: [
          {
            startTime: 7am,
            endTime: 3pm
          },
          {
            startTime: 9pm,
            endTime: 1am
          }
        ]
      },
      reservedAppts: {
        date0: [
          {
            clientID: 0,
            startTime: 1pm,
            endTime: 1:30pm
          },
          {
            clientID: 1,
            startTime: 12:30pm,
            endTime: 2pm
          }
        ],

        date1: {

        }
      }
    }


  clients: 

    show them the providerID.availability
      in 15 min increments

      case1: 

        provider ID 0, 
        date0: 

*/