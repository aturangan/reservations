import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ProviderFields from './ProviderFields.jsx';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

// import './App.css';

// put hard coded provider names into util folder and import 

export default function ProviderForm() {
  // initialize to ID: 0 provider name if provider exists
  const [provider, setProvider] = useState(null);

  // const submitForm = event => {
  //   event.preventDefault();
  // };

  return (
    <>
      <form>
        <FormControl fullWidth>
          <InputLabel>Name (ID)</InputLabel>
          <Select
            // value={10}
            defaultValue="10"
            label="Name"
            name="name"
            onChange={event => setProvider(event.target.value)}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <ProviderFields provider={provider} />
        {/* <Button onClick={submitForm} variant="contained">Submit</Button> */}
      </form>
    </>
  );
}