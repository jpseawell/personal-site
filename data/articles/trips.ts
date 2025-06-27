import { Article } from ".";

export const trips: Article = {
  slug: "trips",
  title: "Building MGM Trips",
  description:
    "Need a high level overview of your next Vegas vacation? Look no further than the Trips web app.",
  bannerImg: {
    path: "/images/trips-web-opt.png",
    alt: "Checking in to a Las Vegas hotel.",
  },
  content: `
  # Building a Way for Guests to View Their Trips at _MGM Resorts_  
  *Lead Front-End Engineer · React, TypeScript, Next.js*

  ## Project Snapshot  
  The Trips flow is a Next.js web app on the MGM Web Platform that fetches and displays a guest’s reservations and itineraries in a clean, mobile-friendly layout.

  ## Why It Matters  
  Guests wanted one place to see every upcoming stay, dinner, and show. Our team built a unified view so they could plan, adjust, or just day-dream before arrival.

  ## Under the Hood  
  ### Three-Step Journey  
  1. **Trips List** – cards showing upcoming and past trips  
  2. **Itinerary** – chronological view of all reservations for a trip, plus smart recommendations  
  3. **Details** – deep dive into a single reservation (room, dining, or show)  

  ### Implementation Highlights  
  - Requires MGM account auth to pull trip data  
  - Trips presented as cards, grouped by upcoming vs. past  
  - Itinerary data fetched on demand, so updates appear instantly  
  - Three reservation types (room, dining, show) handled by one polymorphic \`Reservation\` class

  ## Roadblocks & Fixes  
  ### Taming Time Zones  
  Server (UTC), browser, and property zones all differed. Converting everything to the browser’s zone kept times intuitive while preserving accuracy.

  ### One UI, Three Reservation Types  
  Instead of three separate UIs, a single \`Reservation\` class absorbed backend data and exposed common helpers, letting the front end stay DRY.

  ## Results in the Wild  
  The feature rolled out smoothly and remains in use after multiple re-skins and migrations—proof the core architecture still holds up.
  `,
  keywords: ["MGM", "Trips", "MGM Resorts", "polymorphic", "timezones"],
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
