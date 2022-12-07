import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

export default function Client() {
  // const [clientID, setClientID] = useState(null);
  // const [providerID, setProviderID] = useState(null);
  // const [apptID, setApptID] = useState(null);

  const [apptDetails, setApptDetails] = useState({
    clientID: null,
    providerID: null,
    appointment: null, 
  });

  const collectApptDetails = (category, value) => {
    setApptDetails(prevState => ({
      ...prevState,
      [category]: value,
    }));
  }

  return (
    <div>
      client
      <Select
        // value={10}
        defaultValue="10"
        label="Client Name"
        name="clientName"
        onChange={event => collectApptDetails('clientID', event.target.value)}
        // onChange={event => setClient(event.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>

      <Select
        // value={10}
        defaultValue="10"
        label="Provider Name"
        name="providerName"
        onChange={event => collectApptDetails('providerID', event.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>



      <TextField>Name</TextField>
    </div>
  );
};













// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Grid from '@mui/material/Grid';
// import { submitProviderSchedule } from '../../actions/providerActions';
// import { isValidDate, isValidTime } from '../../utils/errorHandling';
// import {
//   dateStr,
//   readableProviderFields,
//   startTimeStr,
//   endTimeStr
// } from '../../constants';
// import { useDispatch, useSelector } from 'react-redux';

// const {
//   DATE,
//   STARTTIME,
//   ENDTIME,
// } = readableProviderFields;

// export default function ProviderFields({ providerID }) {
//   const initialForm = {
//     date: '',
//     startTime: '',
//     // startDayOrNight: '',
//     endTime: '', 
//     // endDayOrNight: '',
//   };
//   const [formFields, setFormFields] = useState([initialForm]);
//   const [errors, setErrors] = useState(null);
//   const dispatch = useDispatch();
//   const test = useSelector((state) => state);

//   useEffect(() => {
//     console.log('form fields: ', formFields);
//     setFormFields([initialForm]);
//     setErrors(null);
//   }, [providerID]);

//   useEffect(() => {
//     console.log('mounted');
//     console.log('test: ', test);
//   })

//   const handleFormChange = (event, index) => {
//     const { name, value } = event.target;
//     let data = [...formFields];
//     data[index][name] = value;
//     setFormFields(data);
//   };

//   const addFields = () => {
//     let newField = { 
//       // name: '',
//       date: '',
//       startTime: '',
//       // startDayOrNight: '',
//       endTime: '',
//       // endDayOrNight: '',
//     };
//     setFormFields([...formFields, newField]);
//   };

//   const removeFields = (index) => {
//     let providerFormData = [...formFields];
//     providerFormData.splice(index, 1);
//     setFormFields(providerFormData);
//   };

//   const submitForm = event => {
//     const errorsList = [];
//     const filledFields = Object.entries(formFields);

//     formFields.forEach((field, index) => {
//       // console.log(`${index}: ${key} = ${JSON.stringify(value)}`);

//     // for (let [index, [category, value]] of filledFields.entries()) {
//       const readableIndex = index + 1;
//       if (!isValidDate(field[dateStr])) {
//         errorsList.push(`#${readableIndex}: ${DATE} needs to be valid & in MM/DD/YYYY format.`)
//       }

//       if (!isValidTime(field[startTimeStr])) {
//         errorsList.push(`#${readableIndex}: ${STARTTIME} needs to be in valid 24 hour format (HH:MM).`);
//       }

//       if (!isValidTime(field[endTimeStr])) {
//         errorsList.push(`#${readableIndex}: ${ENDTIME} needs to be in valid 24 hour format (HH:MM).`);
//       }
//       // if ((field[startTimeStr] || field[endTimeStr]) && !isValidTime(value)) {
//       // }
//       console.log('errors: ', errors);
//       setErrors(errorsList);
//     });

//     // if (!errors || errors.length < 1) {
//     //   // submit 
//     // }
//     dispatch(submitProviderSchedule({
//       id: providerID,
//       schedule: formFields,
//     }));

//     event.preventDefault();
//   };

//   return (
//     <>
//       {formFields.map((form, index) => {
//         const {
//           date,
//           startTime,
//           // startDayOrNight,
//           endTime,
//           // endDayOrNight,
//         } = form;
//         return (
//           <Grid container spacing={2} key={index}>
//             {index + 1}
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Date (MM/DD/YYYY)"
//                 name={dateStr}
//                 onChange={event => handleFormChange(event, index)}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Start Time in 24 hour format (HH:MM)"
//                 name={startTimeStr}
//                 onChange={event => handleFormChange(event, index)}
//                 value={startTime}
//                 variant="outlined"
//               />
//             </Grid>
//             {/* <Grid item xs={12} sm={2}>
//               <Select
//                 defaultValue="AM"
//                 name="startDayOrNight"
//                 onChange={event => handleFormChange(event, index)}
//               >
//                 <MenuItem value="AM">AM</MenuItem>
//                 <MenuItem value="PM">PM</MenuItem>
//               </Select>
//             </Grid> */}
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 label="End Time in 24 Hour Format (HH:MM)"
//                 name={endTimeStr}
//                 onChange={event => handleFormChange(event, index)}
//                 value={endTime}
//                 variant="outlined"
//               />
//             </Grid>
//             {/* <Grid item xs={12} sm={2}>
//               <Select
//                 defaultValue="PM"
//                 label="Name"
//                 name="endDayOrNight"
//                 onChange={event => handleFormChange(event, index)}
//               >
//                 <MenuItem value="AM">AM</MenuItem>
//                 <MenuItem value="PM">PM</MenuItem>
//               </Select>
//             </Grid> */}
//             <Grid item xs={12} sm={2}>
//               <Button onClick={() => removeFields(index)} variant="contained">Remove</Button>
//             </Grid>
//           </Grid>
//         )
//       })}
//       <Button onClick={addFields} variant="contained">Add More..</Button>
//       <br />
//       <Button onClick={submitForm} variant="contained">Submit</Button>
//       {errors && errors.length > 0 ?
//         <>
//           <section>Please correct the following:</section>
//           <br />
//           <div>
//             {/* {errors} */}
//             {errors.map((error, index) => <li key={index}>{error}</li>)}
//             {/* {errors.map(error => {
//               <p>{error}</p> 
//             })} */}
//           </div>
//         </>
//         : null
//       }
//     </>
//   );
// }