import { Autocomplete } from "@mui/material";
import TextBlockItem from "../components/text/TextBlockItem";
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import ComboBox from "../components/form-items/ComboBox";


// autocomplete and relevant State code pulled from 
// https://stackoverflow.com/questions/59783148/programmatically-set-value-in-material-ui-autocomplete-textfield

const departments = [
  'African Plains',
  'Near Side',
  'Far side',
  'Elephants'
]

function HomePage() {
  return (
    <section>
      <h1>Home Page</h1>
      <div>
        
        <TextBlockItem
          title="Welcome"
          description="Hi, welcome to my website. I 
      created it to familiarise myself with React, and for a bit of a 
      creative outlet"
        />
      </div>
      <div>
        <ComboBox />
      </div>
    </section>
  );
}
export default HomePage;
