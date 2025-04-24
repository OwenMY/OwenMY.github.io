import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import About from "../About";

const renderAboutSection = () => {
  render(
    <IntlProvider locale="en">
      <About />
    </IntlProvider>,
  );
};

describe("About Me", () => {
  it("renders the section title", () => {
    renderAboutSection();
    expect(screen.getByText(/About Me/i)).toBeVisible();
  });

  it("renders the software experience description", () => {
    renderAboutSection();
    expect(
      screen.getByText(
        /I am a front-end engineer with two years of experience*/i,
      ),
    ).toBeVisible();
  });

  it("renders the software experience image with accessible text", () => {
    renderAboutSection();

    const manGivingMeetingsImage = screen.getByAltText(
      /man giving meeting at a white board with two people/i,
    );
    expect(manGivingMeetingsImage).toBeVisible();
  });

  it("renders the cnc machinist experience description", () => {
    renderAboutSection();
    expect(
      screen.getByText(/Prior to becoming a software engineer*/i),
    ).toBeVisible();
  });

  it("renders the cnc machinist experience image with accessible text", () => {
    renderAboutSection();

    const cncMachinistImage = screen.getByAltText(/man operating cnc machine/i);
    expect(cncMachinistImage).toBeVisible();
  });

  it("renders the military experience description", () => {
    renderAboutSection();
    expect(
      screen.getByText(/I am also a Marine Corps veteran who*/i),
    ).toBeVisible();
  });

  it("renders the military experience image with accessible text", () => {
    renderAboutSection();

    const militaryImage = screen.getByAltText(
      /military man saluting with helicopter in background/i,
    );
    expect(militaryImage).toBeVisible();
  });
});
