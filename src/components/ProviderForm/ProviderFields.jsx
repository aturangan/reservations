import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { submitProviderSchedule } from '../../actions/providerActions';
import { isValidDate, isValidTime } from '../../utils/errorHandling';
import {
  dateStr,
  readableProviderFields,
  startTimeStr,
  endTimeStr
} from '../../constants';
import { useDispatch, useSelector } from 'react-redux';

const {
  DATE,
  STARTTIME,
  ENDTIME,
} = readableProviderFields;

export default function ProviderFields({ providerID }) {
  const initialForm = {
    date: '',
    startTime: '',
    // startDayOrNight: '',
    endTime: '', 
    // endDayOrNight: '',
  };
  const [formFields, setFormFields] = useState([initialForm]);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const test = useSelector((state) => state);

  useEffect(() => {
    console.log('form fields: ', formFields);
    setFormFields([initialForm]);
    setErrors(null);
  }, [providerID]);

  useEffect(() => {
    console.log('mounted');
    console.log('test: ', test);
  })

  const handleFormChange = (event, index) => {
    const { name, value } = event.target;
    let data = [...formFields];
    data[index][name] = value;
    setFormFields(data);
  };

  const addFields = () => {
    let newField = { 
      // name: '',
      date: '',
      startTime: '',
      // startDayOrNight: '',
      endTime: '',
      // endDayOrNight: '',
    };
    setFormFields([...formFields, newField]);
  };

  const removeFields = (index) => {
    let providerFormData = [...formFields];
    providerFormData.splice(index, 1);
    setFormFields(providerFormData);
  };

  const submitForm = event => {
    const errorsList = [];
    const filledFields = Object.entries(formFields);

    formFields.forEach((field, index) => {
      // console.log(`${index}: ${key} = ${JSON.stringify(value)}`);

    // for (let [index, [category, value]] of filledFields.entries()) {
      const readableIndex = index + 1;
      if (!isValidDate(field[dateStr])) {
        errorsList.push(`#${readableIndex}: ${DATE} needs to be valid & in MM/DD/YYYY format.`)
      }

      if (!isValidTime(field[startTimeStr])) {
        errorsList.push(`#${readableIndex}: ${STARTTIME} needs to be in valid 24 hour format (HH:MM).`);
      }

      if (!isValidTime(field[endTimeStr])) {
        errorsList.push(`#${readableIndex}: ${ENDTIME} needs to be in valid 24 hour format (HH:MM).`);
      }
      // if ((field[startTimeStr] || field[endTimeStr]) && !isValidTime(value)) {
      // }
      console.log('errors: ', errors);
      setErrors(errorsList);
    });

    // if (!errors || errors.length < 1) {
    //   // submit 
    // }
    dispatch(submitProviderSchedule({
      id: providerID,
      schedule: formFields,
    }));

    event.preventDefault();
  };

  return (
    <>
      {formFields.map((form, index) => {
        const {
          date,
          startTime,
          // startDayOrNight,
          endTime,
          // endDayOrNight,
        } = form;
        return (
          <Grid container spacing={2} key={index}>
            {index + 1}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Date (MM/DD/YYYY)"
                name={dateStr}
                onChange={event => handleFormChange(event, index)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Start Time in 24 hour format (HH:MM)"
                name={startTimeStr}
                onChange={event => handleFormChange(event, index)}
                value={startTime}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12} sm={2}>
              <Select
                defaultValue="AM"
                name="startDayOrNight"
                onChange={event => handleFormChange(event, index)}
              >
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="PM">PM</MenuItem>
              </Select>
            </Grid> */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="End Time in 24 Hour Format (HH:MM)"
                name={endTimeStr}
                onChange={event => handleFormChange(event, index)}
                value={endTime}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12} sm={2}>
              <Select
                defaultValue="PM"
                label="Name"
                name="endDayOrNight"
                onChange={event => handleFormChange(event, index)}
              >
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="PM">PM</MenuItem>
              </Select>
            </Grid> */}
            <Grid item xs={12} sm={2}>
              <Button onClick={() => removeFields(index)} variant="contained">Remove</Button>
            </Grid>
          </Grid>
        )
      })}
      <Button onClick={addFields} variant="contained">Add More..</Button>
      <br />
      <Button onClick={submitForm} variant="contained">Submit</Button>
      {errors && errors.length > 0 ?
        <>
          <section>Please correct the following:</section>
          <br />
          <div>
            {/* {errors} */}
            {errors.map((error, index) => <li key={index}>{error}</li>)}
            {/* {errors.map(error => {
              <p>{error}</p> 
            })} */}
          </div>
        </>
        : null
      }
    </>
  );
}

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <Grid container alignItems="center" justify="center" direction="column">
  //       <Grid item>
  //         <TextField
  //           id="name-input"
  //           name="name"
  //           label="Name"
  //           type="text"
  //           value={formFields.name}
  //           onChange={event => handleFormChange(event, index)}
  //         />
  //       </Grid>
  //       <Grid item>
  //         <TextField
  //           id="date-input"
  //           name="date"
  //           label="Date"
  //           type="text"
  //           value={formFields.date}
  //           onChange={event => handleFormChange(event, index)}
  //         />
  //       </Grid>
  //       <Grid item>
  //         <FormControl>
  //           <FormLabel>Gender</FormLabel>
  //           <RadioGroup
  //             name="gender"
  //             value={formValues.gender}
  //             onChange={handleInputChange}
  //             row
  //           >
  //             <FormControlLabel
  //               key="am"
  //               value="am"
  //               control={<Radio size="small" />}
  //               label="AM"
  //             />
  //             <FormControlLabel
  //               key="pm"
  //               value="pm"
  //               control={<Radio size="small" />}
  //               label="PM"
  //             />
  //           </RadioGroup>
  //         </FormControl>
  //       </Grid>
  //       <Grid item>
  //         <FormControl>
  //           <Select
  //             name="os"
  //             value={formValues.os}
  //             onChange={handleInputChange}
  //           >
  //             <MenuItem key="mac" value="mac">
  //               Mac
  //             </MenuItem>
  //             <MenuItem key="windows" value="windows">
  //               Windows
  //             </MenuItem>
  //             <MenuItem key="linux " value="linux">
  //               Linux
  //             </MenuItem>
  //           </Select>
  //         </FormControl>
  //       </Grid>
  //       <Grid item>
  //         <div style={{ width: "400px" }}>
  //           Favorite Number
  //           <Slider
  //             value={formValues.favoriteNumber}
  //             onChange={handleSliderChange("favoriteNumber")}
  //             defaultValue={1}
  //             step={1}
  //             min={1}
  //             max={3}
  //             marks={[
  //               {
  //                 value: 1,
  //                 label: "1",
  //               },
  //               {
  //                 value: 2,
  //                 label: "2",
  //               },
  //               {
  //                 value: 3,
  //                 label: "3",
  //               },
  //             ]}
  //             valueLabelDisplay="off"
  //           />
  //         </div>
  //       </Grid>
  //       <Button variant="contained" color="primary" type="submit">
  //         Submit
  //       </Button>
  //     </Grid>
  //   </form>
  // )

// }



// function Form() {
//   const [formFields, setFormFields] = useState([
//     { name: '', age: '' },
//   ])

//   const handleFormChange = (event, index) => {
//     let data = [...formFields];
//     data[index][event.target.name] = event.target.value;
//     setFormFields(data);
//   }

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(formFields)
//   }

//   const addFields = () => {
//     let object = {
//       name: '',
//       age: ''
//     }

//     setFormFields([...formFields, object])
//   }

//   const removeFields = (index) => {
//     let data = [...formFields];
//     data.splice(index, 1)
//     setFormFields(data)
//   }

//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         {formFields.map((form, index) => {
//           return (
//             <div key={index}>
//               <input
//                 name='name'
//                 placeholder='Name (ID)'
//                 onChange={event => handleFormChange(event, index)}
//                 value={form.name}
//               />
//               <input
//                 name='age'
//                 placeholder='Age'
//                 onChange={event => handleFormChange(event, index)}
//                 value={form.age}
//               />
//               <button onClick={() => removeFields(index)}>Remove</button>
//             </div>
//           )
//         })}
//       </form>
//       <button onClick={addFields}>Add More..</button>
//       <br />
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// }