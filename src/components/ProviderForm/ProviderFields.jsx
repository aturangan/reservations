import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { submitProviderSchedule } from '../../actions/providerActions';
import { isDateInPresent, isValidDate, isValidTime } from '../../utils/validation';
import {
  dateStr,
  readableProviderFields,
  startTimeStr,
  endTimeStr
} from '../../constants';
import { useDispatch } from 'react-redux';

const {
  DATE,
  STARTTIME,
  ENDTIME,
} = readableProviderFields;

export default function ProviderFields({ providerID }) {
  const initialForm = {
    date: '',
    startTime: '',
    endTime: '',
  };
  const [formFields, setFormFields] = useState([initialForm]);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormFields([initialForm]);
    setErrors(null);
  }, [providerID]);

  const handleFormChange = (event, index) => {
    const { name, value } = event.target;
    let data = [...formFields];
    data[index][name] = value;
    setFormFields(data);
  };

  const addFields = () => {
    let newField = { 
      date: '',
      startTime: '',
      endTime: '',
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

    formFields.forEach((field, index) => {
      const readableIndex = index + 1;
      const dateField = field[dateStr];
      const startTimeField = field[startTimeStr];
      const endTimeField = field[endTimeStr];

      if (!(isValidDate(dateField) && isDateInPresent(dateField))) {
        errorsList.push(`#${readableIndex}: ${DATE} needs to be in MM/DD/YYYY format and in the present or future only.`)
      }
      if (!isValidTime(startTimeField)) {
        errorsList.push(`#${readableIndex}: ${STARTTIME} needs to be in valid 24 hour format (HH:MM).`);
      }
      if (!isValidTime(endTimeField)) {
        errorsList.push(`#${readableIndex}: ${ENDTIME} needs to be in valid 24 hour format (HH:MM).`);
      }

      setErrors(errorsList);
    });

    if (!errors || errors.length < 1) {
      dispatch(submitProviderSchedule({
        providerID: providerID,
        schedule: formFields,
      }));
      setFormFields([initialForm]);
    }
    event.preventDefault();
  };

  return (
    <>
      {formFields.map((form, index) => {
        const {
          date,
          startTime,
          endTime,
        } = form;
        return (
          <Grid container spacing={2} key={index}>
            <Grid item md={1}>
              <h2>#{index + 1}</h2>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                aria-label="date"
                fullWidth
                label="Date (MM/DD/YYYY)"
                name={dateStr}
                onChange={event => handleFormChange(event, index)}
                value={date}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                aria-label="start-time"
                fullWidth
                label="Start Time in 24 hour format (HH:MM)"
                name={startTimeStr}
                onChange={event => handleFormChange(event, index)}
                value={startTime}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                aria-label="end-time"
                fullWidth
                label="End Time in 24 Hour Format (HH:MM)"
                name={endTimeStr}
                onChange={event => handleFormChange(event, index)}
                value={endTime}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <div className="remove-btn-container">
                <Button aria-label="remove-schedule-line" onClick={() => removeFields(index)} variant="contained">Remove</Button>
              </div>
            </Grid>
          </Grid>
        )
      })}
      <div aria-label="add-schedule-row" onClick={addFields} className="provider-page-add-another-date light-blue">
        Add Another Row
      </div>
      <br />
      <div aria-label="submit-form" onClick={submitForm} className="provider-page-add-another-date orange">
        Submit
      </div>
      {errors && errors.length > 0 ?
        <>
          <section>Please correct the following:</section>
          <br />
          <div>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
          </div>
        </>
        : null
      }
    </>
  );
}
