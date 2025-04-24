import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Landing from "../Landing";

const renderLandingSection = () => {
  render(
    <IntlProvider locale="en">
      <Landing />
    </IntlProvider>,
  );
};

describe("Landing", () => {
  it("renders the Landing section description", () => {
    renderLandingSection();

    const name = screen.getByText(/Owen Yoshishige/);
    expect(name).toBeVisible();

    const occupation = screen.getByText(/Full-Stack Developer/);
    expect(occupation).toBeVisible();

    const description = screen.getByText(/With 2 years of*/i);
    expect(description).toBeVisible();
  });

  it("renders the hero image with accessible alt text", () => {
    renderLandingSection();

    const heroImage = screen.getByAltText("Man at a keyboard");
    expect(heroImage).toBeVisible();
  });

  describe("resources", () => {
    it("contains a link to github", async () => {
      renderLandingSection();

      const githubLink = screen.getByRole("link", {
        name: "Link to Owen's Github",
      });

      expect(githubLink).toHaveAttribute("href", "https://github.com/OwenMY");
    });

    it("contains a link to LinkedIn", async () => {
      renderLandingSection();

      const linkedInLink = screen.getByRole("link", {
        name: "Link to Owen's LinkedIn",
      });

      expect(linkedInLink).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/owenyoshishige/",
      );
    });

    it("contains a link to resume", async () => {
      renderLandingSection();

      const resumeLink = screen.getByText("Resume");
      expect(resumeLink).toBeVisible();
    });
  });
});
