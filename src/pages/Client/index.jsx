import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { mockClientsList, mockProvidersList } from '../../constants/mockData';
import { get15minAppts } from '../../helpers/helpers';
import moment from 'moment';
import { saveReservation } from '../../actions/clientActions';

export default function Client() {
  const dispatch = useDispatch();
  const initialApptDetails = {
    clientID: null,
    providerID: null,
    appointment: null, 
  };
  const [apptDetails, setApptDetails] = useState(initialApptDetails);
  const providerSchedules = useSelector((state) => state.providerData.providerSchedules);
  const [availableAppts, setAvailableAppts] = useState([]);
  const [reservation, setReservation] = useState(null);
  const [confirmBtnText, setConfirmBtnText] = useState('Confirm Appointment');

  const collectApptDetails = (category, value) => {
    setApptDetails(prevState => ({
      ...prevState,
      [category]: value,
    }));
  };

  useEffect(() => {
    if (availableAppts && availableAppts.length > 0) setAvailableAppts([]);
    getProviderAppts(apptDetails.providerID);
    setConfirmBtnText('Confirm your Appointment')
  }, [apptDetails.providerID]);

  const confirmAppointment = () => {
    const { providerID, clientID } = apptDetails;
    const { value } = reservation;
    const startTime = value ? value.startTime : null;
    const endTime = value ? value.endTime : null;

    dispatch(saveReservation({
      providerID: providerID,
      clientID: clientID,
      startTime: (new Date(startTime)).toString(),
      endTime: (new Date(endTime)).toString(),
    }));
    setConfirmBtnText('Submitted!');
    setReservation(null);
  };

  const getProviderAppts = providerID => {
    if (providerSchedules) {
      const providerData = providerSchedules[providerID];
      const schedule = providerData ? providerData.schedule : null;
      if (providerData && schedule && (schedule.length > 0)) {
        setAvailableAppts(get15minAppts(schedule));
      }
    }
  };

  const handleReserveClick = ({ timeSelected, value, index }) => {
    setReservation({ timeSelected, value, index });
    setConfirmBtnText('Confirm your Appointment');
  };

  return (
    <div className="client-page">
      <h1>Schedule with a Provider</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl className="client-page-dropdown">
            <InputLabel>Your Name</InputLabel>
            <Select
              defaultValue=""
              label="Your Name"
              onChange={event => collectApptDetails('clientID', event.target.value)}
            >
              {mockClientsList.map((clientData, index) => {
              const { name, clientID } = clientData;
              return (
                <MenuItem
                  key={index}
                  name={clientID}
                  value={clientID}
                >
                  {name}
                </MenuItem>
              )
            })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl className="client-page-dropdown">
            <InputLabel>Provider Name</InputLabel>
            <Select
              defaultValue=""
              label="Provider Name"
              onChange={event => collectApptDetails('providerID', event.target.value)}
            >
              {mockProvidersList.map((providerData, index) => {
              const { name, providerID } = providerData;
              return (
                <MenuItem
                  key={index}
                  name={providerID}
                  value={providerID}
                >
                  {name}
                </MenuItem>
              )
            })}
            </Select>
          </FormControl>
        </Grid>
        <h1>Available Appointments</h1>
        <Grid container spacing={2}>
          {
            availableAppts && (availableAppts.length > 0) && availableAppts.map((appt, index) => {
              const startDay = moment(appt.startTime).format('MMMM Do YYYY');
              const apptStartStr = moment(appt.startTime).format('h:mm a');
              const apptEndStr = moment(appt.endTime).format('h:mm a');
              
              return (
                <Grid 
                  onClick={() => handleReserveClick({ timeSelected: moment(), value: appt, index: index })}
                  key={index} 
                  item 
                  xs={12} 
                  md={2}
                >
                  <Button
                    sx={{
                      backgroundColor: (reservation && reservation.index === index ? 'aliceblue' : '')
                    }}
                    variant="contained"
                    key={index}
                  >
                    <strong>{startDay}</strong>
                    <div>{apptStartStr}-{apptEndStr}</div>
                  </Button>
                </Grid>
              )
            })
          }
        </Grid>
        {availableAppts && availableAppts.length > 0 && (
          <div className={`client-page-confirm`} onClick={reservation ? confirmAppointment : null}>
            {confirmBtnText}
          </div>
        )}
    </Grid>
    </div>
  );
};