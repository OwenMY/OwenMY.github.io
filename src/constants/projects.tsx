import React from "react";
import { FormattedMessage } from "react-intl";

// Project URLs
export const GYMX5000_URL = "https://github.com/OwenMY/GymX5000";
export const ATELIER_URL = "https://github.com/OwenMY/Atelier";
export const QUESTIONS_AND_ANSWERS_URL = "https://github.com/OwenMY/Questions-And-Answers-API";
export const AZ_TRAFFIC_MAPS_URL = "https://github.com/OwenMY/Arizona-Traffic-Maps";


// Project Titles
export const GYMX_5000_TITLE= (
  <FormattedMessage
    id="portfolio.gymx5000.title"
    defaultMessage="GymX5000"
    description="Text describing the title of the project GYMX5000"
  />
);

export const ATELIER_TITLE= (
  <FormattedMessage
    id="portfolio.atelier.title"
    defaultMessage="Atelier"
    description="Text describing the title of the project Atelier"
  />
);

export const QUESTIONS_AND_ANSWERS_TITLE= (
  <FormattedMessage
    id="portfolio.qanda.title"
    defaultMessage="Questions and Answers API"
    description="Text describing the title of the project Questions and Answers API"
  />
);

export const AZ_TRAFFIC_MAPS_TITLE= (
  <FormattedMessage
    id="portfolio.aztm.title"
    defaultMessage="Arizona Traffic Maps"
    description="Text describing the title of the project Arizona Traffic Maps"
  />
);


// Project Descriptions
export const GYMX_5000_DESCRIPTION = (
  <FormattedMessage
    id="portfolio.gymx5000.description"
    defaultMessage="A gym app MVP a team of engineers created for a client. We implemented a polymorphic database design to allow scalable category additions and prioritized core features to meet a tight deadline."
    description="Text describing what happened during a project called GYMX5000"
  />
);

export const ATELIER_DESCRITION = (
  <FormattedMessage
    id="portfolio.atelier.description"
    defaultMessage="A landing page for a clothing store created using React and ExpressJS on a team of 4 engineers"
    description="Text describing what happened during a project called Atelier"
  />
);

export const QUESTIONS_AND_ANSWERS_DESCRIPTION = (
  <FormattedMessage
    id="portfolio.qanda.description"
    defaultMessage="An API used for the Atelier store for storing and reading questions and answers"
    description="Text describing what happened during a project called Questions and Answers"
  />
);

export const AZ_TRAFFIC_MAPS_DESCRIPTION = (
  <FormattedMessage
    id="portfolio.aztm.description"
    defaultMessage="A map app using the State Of Arizonas traffic API for locating construction bottlenecks on the road when you travel. The app also includes live footage of the roads"
    description="Text describing what happened during a project called Arizona Traffic Maps"
  />
);
