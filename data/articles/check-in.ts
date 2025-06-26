import { Article } from ".";

export const checkIn: Article = {
  slug: "check-in",
  title: "Building Web Check-In",
  description:
    "Lobby lines aren’t fun, so we replaced them with a self-service web app that feels obvious to use.",
  bannerImg: {
    path: "/images/vegas-check-in-opt.webp",
    alt: "Checking in to a Las Vegas hotel.",
  },
  content: `
# Building _MGM_’s Web Check-In Flow

Lobby lines aren’t fun, so we replaced them with a self-service web app that feels obvious to use. Here’s how I approached it and why it matters.

## What We Shipped
- Five clear steps: **Start → Find Reservation → Payment → Review → Success**  
- Consistent layout and behavior across phone, tablet, and desktop  
- Dynamic flows (upgrades, add-ons, or straight to keys) chosen in real time from reservation data  
`,
  keywords: ["MGM", "Check-In"],
  links: [
    {
      href: "http://mgmresorts.com/",
      label: "MGM Resorts",
      openNewTab: true,
    },
  ],
  tech: [
    "React",
    "Next JS",
    "JavaScript",
    "TypeScript",
    "GQL",
    "GraphQL",
    "Micro Front-End",
  ],
};
