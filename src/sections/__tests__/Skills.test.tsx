import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Skills from "../Skills";

const renderSkillsSection = () => {
  render(
    <IntlProvider locale="en">
      <Skills />
    </IntlProvider>,
  );
};

describe("Landing", () => {
  it("renders the Skills section heading", () => {
    renderSkillsSection();

    expect(screen.getByText(/Skills/)).toBeVisible();
  });

  it("renders the skills image with accessible alt text", () => {
    renderSkillsSection();

    const skillsImage = screen.getByAltText("Man displaying skills");
    expect(skillsImage).toBeVisible();
  });
});
