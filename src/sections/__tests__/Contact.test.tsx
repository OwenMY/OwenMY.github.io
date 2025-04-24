import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Contact from "../Contact";

const renderContactSection = () => {
  render(
    <IntlProvider locale="en">
      <Contact />
    </IntlProvider>,
  );
};

describe("Contact", () => {
  it("renders the Contact section header", () => {
    renderContactSection();

    expect(screen.getByText(/Contact/i)).toBeVisible();
  });

  it("renders the call to action", () => {
    renderContactSection();

    const calltoAction = screen.getByText(
      /If you are interested in hiring me*/i,
      { exact: false },
    );
    expect(calltoAction).toBeVisible();
  });

  it("renders the contact section image with accessible alt text", () => {
    renderContactSection();

    const contactImage = screen.getByAltText(/Man giving a thumbs up/i);
    expect(contactImage).toBeVisible();
  });

  it("renders the contact form", () => {
    renderContactSection();

    // The send button is a part of the contact form component
    const sendButton = screen.getByText(/Send/);
    expect(sendButton).toBeVisible();
  });
});
