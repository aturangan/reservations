import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import ProviderFields from './ProviderFields.jsx';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { mockProvidersList } from '../../constants/mockData';

export default function ProviderForm() {
  const [providerID, setProviderID] = useState(mockProvidersList[0].providerID);

  return (
    <div className="provider-page">
      <h1>Create Your Schedule</h1>
      <form>
        <FormControl className="provider-page-dropdown" fullWidth>
          <InputLabel>Name (ID)</InputLabel>
          <Select
            defaultValue=""
            label="Provider Name"
            onChange={event => setProviderID(event.target.value)}
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
        <ProviderFields providerID={providerID} />
        {/* <Button onClick={submitForm} variant="contained">Submit</Button> */}
      </form>
    </div>
  );
}