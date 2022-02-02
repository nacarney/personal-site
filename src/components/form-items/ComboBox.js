import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from '@mui/material/Autocomplete';
import { TextField, Button } from "@material-ui/core";

export default function ComboBox() {

// autocomplete code pulled from 
// https://stackoverflow.com/questions/59783148/programmatically-set-value-in-material-ui-autocomplete-textfield

    const handleClick = () => {
        // set value in TextField from dropdown list
      };
    
      return (
          <div>
              <Autocomplete
            options={top100Films}
            getOptionLabel={option => option.title}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                label="Combo box"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Button color="primary" variant="contained">Submit</Button>
          </div>
          
          
      );
    }
    
    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 },
      { title: "The Godfather: Part II", year: 1974 },
      { title: "The Dark Knight", year: 2008 }
    ];