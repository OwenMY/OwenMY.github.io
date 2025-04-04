import React, { useReducer, useState } from "react";
import { FormattedMessage } from "react-intl";
import Button  from "@mui/material/Button";
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "1fjYNTMsrNIjh7aTa"
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const reducer = (state: FormValues, action: {type: string, val: string}): FormValues => {
  const {type, val} = action;

  switch(type) {
    case "firstName":
      return {...state, firstName: val};

    case "lastName":
      return {...state, lastName: val};

    case "email":
      return {...state, email: val};

    case "message":
      return {...state, message: val};

    default:
      return {...state};
  }
};

const INIT_FORM_VALS: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

const INIT_ERROR_STATE = {
  firstName: false,
  lastName: false,
  email: false,
  message: false
};

const validateInput = (type: string, val: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+)\.+[\w-]{2,}/;
  let isInvalid = false;

  if (val.length === 0) isInvalid = true;
  if (type === "email" && !emailRegex.test(val)) isInvalid = true;

  return isInvalid;
};

export const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, INIT_FORM_VALS);
  const [inputError, setInputError] = useState(INIT_ERROR_STATE);

  const handleSubmission = () => {
    let allInputsValid = true;

    for (const input in state) {
      const inputIsInvalid = validateInput(input, state[input]);

      if (inputIsInvalid) {
        allInputsValid = false;
        setInputError(prevState => ({...prevState, [input]: inputIsInvalid}));
      }
    }

    if (allInputsValid) console.log("All are valid");
  }

  return (
    <Box component="form" sx={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
      <TextField
        required
        variant="outlined"
        error={inputError.firstName}
        sx={{width: "17rem"}}
        onChange={(e) =>  dispatch({type: "firstName", val: e.target.value})}
        onBlur={() => setInputError({
          ...inputError,
          firstName: validateInput("firstName", state.firstName)
        })}
        label={
          <FormattedMessage
            id="contact.input.firstname.label"
            defaultMessage="FirstName"
            description="Label indicating that your first name should be written in the input"
          />
        }
      />
      <TextField
        required
        error={inputError.lastName}
        sx={{width: "17rem"}}
        onChange={(e) =>  dispatch({type: "lastName", val: e.target.value})}
        onBlur={() => setInputError({
          ...inputError,
          lastName: validateInput("lastName", state.lastName)
        })}
        label={
          <FormattedMessage
            id="contact.input.lastname.label"
            defaultMessage="LastName"
            description="Label indicating that your last name should be written in the input"
          />
        }
        variant="outlined"
      />
      <TextField
        required
        error={inputError.email}
        sx={{width: "100%"}}
        onChange={(e) => dispatch({type: "email", val: e.target.value})}
        onBlur={() => setInputError({
          ...inputError,
          email: validateInput("email", state.email)
        })}
        label={
          <FormattedMessage
            id="contact.input.email.label"
            defaultMessage="Email"
            description="Label indicating that your last name should be written in the input"
          />
        }
        variant="outlined"
      />
      <TextField
        required
        sx={{width: "100%"}}
        error={inputError.message}
        onChange={(e) => dispatch({type: "message", val: e.target.value})}
        onBlur={() => setInputError({
          ...inputError,
          message: validateInput("message", state.message)
        })}
        label={
          <FormattedMessage
            id="contact.input.message.label"
            defaultMessage="Message"
            description="Label indicating that your message should be written in the input"
          />
        }
        multiline
        minRows={4}
        maxRows={4}
        slotProps={{htmlInput: {maxLength: 500}}}
      />
      <Button onClick={handleSubmission} variant="contained" sx={{width: "100%"}}>
        <FormattedMessage
          id="contact.submit.button.label"
          defaultMessage="Send"
          description="Label indicating that pressing the button will submit the form"
        />
      </Button>
    </Box>
)};
