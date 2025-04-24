import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Portfolio from "../Portfolio";

const renderProfileSection = () => {
  render(
    <IntlProvider locale="en">
      <Portfolio />
    </IntlProvider>,
  );
};

const assertProject = ({
  title,
  alt_text,
  github_link,
}: {
  title: string;
  alt_text: string;
  github_link: string;
}) => {
  expect(screen.getByText(title)).toBeVisible();
  expect(screen.getByAltText(alt_text)).toBeVisible();

  const links = screen.getAllByRole("link");
  const link = links.find((element) => {
    return element.getAttribute("href") === github_link;
  });

  expect(link).toBeDefined();
};

describe("Portfolio", () => {
  it("renders the Portfolio section heading", () => {
    renderProfileSection();

    expect(screen.getByText(/Portfolio/)).toBeVisible();
  });

  describe("Projects", () => {
    it("renders the Arizona Traffic Maps project", () => {
      renderProfileSection();

      assertProject({
        title: "Arizona Traffic Maps",
        alt_text: "Arizona Traffic Maps",
        github_link: "https://github.com/OwenMY/Arizona-Traffic-Maps",
      });
    });

    it("renders the Questions and Answers project", () => {
      renderProfileSection();

      assertProject({
        title: "Questions and Answers API",
        alt_text: "Questions and Answers",
        github_link: "https://github.com/OwenMY/Questions-And-Answers-API",
      });
    });

    it("renders the Atelier project", () => {
      renderProfileSection();

      assertProject({
        title: "Atelier",
        alt_text: "Atelier",
        github_link: "https://github.com/OwenMY/Atelier",
      });
    });

    it("renders the GymX5000 project", () => {
      renderProfileSection();

      assertProject({
        title: "GymX5000",
        alt_text: "Gym X 5000",
        github_link: "https://github.com/OwenMY/GymX5000",
      });
    });
  });
});
