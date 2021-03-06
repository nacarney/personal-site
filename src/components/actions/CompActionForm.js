import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Button } from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { FormHelperText } from "@mui/material";

function CompActionForm(props) {


    return(
        <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    );

}

export default CompActionForm;