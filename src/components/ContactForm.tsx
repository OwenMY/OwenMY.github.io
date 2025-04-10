import React, { useReducer, useState } from "react";
import { FormattedMessage } from "react-intl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const reducer = (
  state: FormValues,
  action: { type: string; val: string },
): FormValues => {
  const { type, val } = action;

  switch (type) {
    case "firstName":
      return { ...state, firstName: val };

    case "lastName":
      return { ...state, lastName: val };

    case "email":
      return { ...state, email: val };

    case "message":
      return { ...state, message: val };

    default:
      return { ...state };
  }
};

const INIT_FORM_VALS: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const INIT_ERROR_STATE = {
  firstName: false,
  lastName: false,
  email: false,
  message: false,
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
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState<{
    isVisible: boolean;
    type: "success" | "error";
  }>({
    isVisible: false,
    type: "success",
  });

  const sendMessage = () => {
    const full_name = `${state.firstName} ${state.lastName}`;

    const email_template = {
      subject: "Lets connect!",
      name: full_name,
      message: state.message,
      email: state.email,
    };

    const options = { publicKey: "1fjYNTMsrNIjh7aTa" };

    emailjs
      .send("service_5tqs43z", "template_fdhfkzi", email_template, options)
      .then(() => {
        setSubmitted(true);
        setShowToast({ isVisible: true, type: "success" });
      })
      .catch(() => setShowToast({ isVisible: true, type: "error" }));
  };

  const handleSubmission = () => {
    let allInputsValid = true;

    for (const input in state) {
      const inputIsInvalid = validateInput(input, state[input]);

      if (inputIsInvalid) {
        allInputsValid = false;
        setInputError((prevState) => ({
          ...prevState,
          [input]: inputIsInvalid,
        }));
      }
    }

    if (allInputsValid) sendMessage();
  };

  const handleToastClose = () =>
    setShowToast((prevState) => ({ ...prevState, isVisible: false }));

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
    >
      <TextField
        required
        variant="outlined"
        error={inputError.firstName}
        disabled={submitted}
        sx={{ width: "100%", "@media (min-width:850px)": { width: "17rem" } }}
        onChange={(e) => dispatch({ type: "firstName", val: e.target.value })}
        onBlur={() =>
          setInputError({
            ...inputError,
            firstName: validateInput("firstName", state.firstName),
          })
        }
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
        sx={{ width: "100%", "@media (min-width:850px)": { width: "17rem" } }}
        disabled={submitted}
        onChange={(e) => dispatch({ type: "lastName", val: e.target.value })}
        onBlur={() =>
          setInputError({
            ...inputError,
            lastName: validateInput("lastName", state.lastName),
          })
        }
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
        sx={{ width: "100%" }}
        disabled={submitted}
        onChange={(e) => dispatch({ type: "email", val: e.target.value })}
        onBlur={() =>
          setInputError({
            ...inputError,
            email: validateInput("email", state.email),
          })
        }
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
        sx={{ width: "100%" }}
        error={inputError.message}
        disabled={submitted}
        onChange={(e) => dispatch({ type: "message", val: e.target.value })}
        onBlur={() =>
          setInputError({
            ...inputError,
            message: validateInput("message", state.message),
          })
        }
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
        slotProps={{ htmlInput: { maxLength: 500 } }}
      />
      <Button
        disabled={submitted}
        onClick={handleSubmission}
        variant="contained"
        sx={{ width: "100%" }}
      >
        <FormattedMessage
          id="contact.submit.button.label"
          defaultMessage="Send"
          description="Label indicating that pressing the button will submit the form"
        />
      </Button>
      <Snackbar
        open={showToast.isVisible}
        autoHideDuration={5000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleToastClose}
          severity={showToast.type}
          sx={{ width: "100%" }}
        >
          {showToast.type === "success" && (
            <FormattedMessage
              id="contact.submit.success.message"
              defaultMessage="Message sent successfully! I'll be in touch shortly"
              description="Alert message indicating the message was sent succesfully."
            />
          )}
          {showToast.type === "error" && (
            <FormattedMessage
              id="contact.submit.error.message"
              defaultMessage="Message failed to send, please try again later."
              description="Alert message indicating the message failed to send."
            />
          )}
        </Alert>
      </Snackbar>
    </Box>
  );
};
