import { IntlProvider } from "react-intl";
import ScrollToTopButton from "../ScrollToTopButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ScrollToTopButton", () => {
  beforeEach(() => {
    // jsdom does not implement scrollTo during testing so it must be mocked to prevent console errors
    window.scrollTo = jest.fn();
  });

  it("triggers scrollTo event when clicked", async () => {
    const spy = jest.spyOn(window, "scrollTo");
    userEvent.setup();
    render(
      <IntlProvider locale="en">
        <ScrollToTopButton />
      </IntlProvider>,
    );

    const button = screen.getByLabelText("scroll back to top");
    await userEvent.click(button);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
