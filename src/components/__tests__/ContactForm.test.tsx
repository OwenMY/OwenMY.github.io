import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import { IntlProvider } from "react-intl";
import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser");
const mockedSend = emailjs.send as jest.Mock;

const renderContactForm = () => {
  render(
    <IntlProvider locale="en">
      <ContactForm />
    </IntlProvider>,
  );
};

const typeIntoFormInput = async (label: string, value: string) => {
  const input = screen.getByText(label).nextSibling.firstChild as HTMLElement;
  await userEvent.click(input);
  await userEvent.type(input, value);
};

const FIRSTNAME_INPUT_LABEL = "FirstName";
const LASTNAME_INPUT_LABEL = "LastName";
const EMAIL_INPUT_LABEL = "Email";
const MESSAGE_TEXTBOX_LABEL = "Message";
const SUCCESS_MESSAGE = /Message sent successfully! I'll be in touch shortly/i;
const ERROR_MESSAGE = /Message failed to send, please try again later./i;

describe("ContactForm", () => {
  beforeEach(() => {
    mockedSend.mockReset();
  });

  it("renders a success message when email sends successfully", async () => {
    mockedSend.mockResolvedValue({ status: 200 });

    userEvent.setup();
    renderContactForm();

    await typeIntoFormInput(FIRSTNAME_INPUT_LABEL, "Bob");
    await typeIntoFormInput(LASTNAME_INPUT_LABEL, "Oblaw");
    await typeIntoFormInput(EMAIL_INPUT_LABEL, "bobo@gmail.com");
    await typeIntoFormInput(MESSAGE_TEXTBOX_LABEL, "Hey lets collaborate!");

    const sendButton = screen.getByText("Send");
    await userEvent.click(sendButton);

    const successToast = await screen.findByText(SUCCESS_MESSAGE, {
      exact: false,
    });
    expect(successToast).toBeVisible();
  });

  it("renders an error message when the send API fails", async () => {
    mockedSend.mockRejectedValueOnce({ status: 500 });

    userEvent.setup();
    renderContactForm();

    await typeIntoFormInput(FIRSTNAME_INPUT_LABEL, "Rob");
    await typeIntoFormInput(LASTNAME_INPUT_LABEL, "Roblaw");
    await typeIntoFormInput(EMAIL_INPUT_LABEL, "robo@gmail.com");
    await typeIntoFormInput(MESSAGE_TEXTBOX_LABEL, "Hey nice website man!");

    const sendButton = screen.getByText("Send");
    await userEvent.click(sendButton);

    const successToast = await screen.findByText(ERROR_MESSAGE, {
      exact: false,
    });
    expect(successToast).toBeVisible();
  });

  it("does not send email when inputs are empty", async () => {
    userEvent.setup();
    renderContactForm();

    const sendButton = screen.getByText("Send");
    await userEvent.click(sendButton);

    expect(screen.queryByText(SUCCESS_MESSAGE)).not.toBeInTheDocument();
    expect(screen.queryByText(ERROR_MESSAGE)).not.toBeInTheDocument();
  });

  it("does not allow invalid emails to be submitted", async () => {
    mockedSend.mockResolvedValue({ status: 200 });
    userEvent.setup();
    renderContactForm();

    await typeIntoFormInput(FIRSTNAME_INPUT_LABEL, "Rob");
    await typeIntoFormInput(LASTNAME_INPUT_LABEL, "Roblaw");
    await typeIntoFormInput(MESSAGE_TEXTBOX_LABEL, "Hey nice website man!");

    // Invalid Email
    await typeIntoFormInput(EMAIL_INPUT_LABEL, "mojojojo");

    const sendButton = screen.getByText("Send");
    await userEvent.click(sendButton);

    expect(screen.queryByText(SUCCESS_MESSAGE)).not.toBeInTheDocument();
    expect(screen.queryByText(ERROR_MESSAGE)).not.toBeInTheDocument();
  });
});
