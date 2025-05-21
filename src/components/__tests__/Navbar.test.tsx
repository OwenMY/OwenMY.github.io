import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import Navbar from "../Navbar";
import { IntlProvider } from "react-intl";

const handleLangChange = jest.fn();

const renderNavbar = () => {
  render(
    <IntlProvider locale="en">
      <Navbar handleLangChange={handleLangChange} />
    </IntlProvider>,
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appendFakeSection = (name: string, mockFn: jest.Mock<any, any, any>) => {
  const section = document.createElement("div");
  section.setAttribute("id", name);
  section.scrollIntoView = mockFn;

  document.body.appendChild(section);
};

const LANGUAGE_OPTIONS = [
  "English",
  "日本語", // Japanese
  "中文", // Chinese
  "Espaniol",
];

describe("Navbar", () => {
  beforeEach(() => {
    handleLangChange.mockReset();
  });

  it("renders the logo", () => {
    renderNavbar();
    const logo = screen.getByText("Owen Yoshishige");
    expect(logo).toBeVisible();
  });

  it.each(["Home", "About", "Portfolio"])(
    "scrolls to %s section when clicking on its nav button",
    async (section) => {
      userEvent.setup();
      renderNavbar();

      const button = screen.getByText(section);

      const scrollIntoViewMock = jest.fn();
      appendFakeSection(section, scrollIntoViewMock);

      await userEvent.click(button);
      expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    },
  );

  it.each(LANGUAGE_OPTIONS)(
    "can change the page language to %s",
    async (langauge) => {
      userEvent.setup();
      renderNavbar();

      const menuButton = screen.getByLabelText("language button");
      await userEvent.click(menuButton);

      const langaugeOption = screen.getByText(langauge);
      await userEvent.click(langaugeOption);

      expect(handleLangChange).toHaveBeenCalledTimes(1);
    },
  );
});
