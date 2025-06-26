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
  # Building _MGM_'s Web Check-In Flow

  *Lead Front-End Engineer · React 18, TypeScript, Next.js*

  ## What is it?
  The Web Check-In flow (aka *WCI*) is a Next.js web app built on the MGM Web Platform. It's a Micro Front-end
  application where the content is rendered as part of the page within the MGM Shell app that displays the standard header/footer.

  ## Why did you build it?
  Lobby lines at a large hotel aren't fun. As part of the *Front-desk of the Future* effort, I developed a
  web flow that enables guests to check in to their room from the comfort of their web browser.

  ## How is it built?
  The Web Check In Flow consists of a series of web pages that the guest navigates through in order
  to complete checkin.
  
  #### The flow is as follows:
  1. Start page (reservation lookup)
  2. Room Add-ons and upgrades
  3. Identitiy Verification
  4. Payment validation
  5. Review & Check-in

  #### Implementation Details:
  - There's an app state context that maintains information about the guest's check-in process.
  - Each page fires one query to a GQL back-end for data retrieval.
  - If the guest abandons the flow at any point, then they need to start over.
  - The guest is redirected to a 3rd party ID verification web flow and then returned to the check-in flow authenticated as a verified user.
  - Once the guest clicks the check in button, then their reservation data is submitted to the back-end to move the reservation to checked-in state.
  - Non-sensitive data is stored to the browser session.

  ## What challenges did you overcome during development?
  The two biggest challenges were turn-around time, and a quirk of the micro front-end shell integration.

  ### Quick Turn-Around
  For various reasons, I needed to implement and release an MVP to begin the WCI pilot program in under three 2-week sprints.
  This left little room for unexpected issues. I worked an extra Saturday and was able to deliver on time.

  ### The Page Refresh Issue
  Long story short, I inherited a web app architecture that caused a full web page refresh on page change. This is a problem
  because it was clearing the app state from page to page which means the app didn't know where the user was at in the flow.

  The kicker is that this only happened on certain environments, so I had no idea this would happen while I was on local dev env.
  After a lot of headache, I was able to find a solution and move forward.

  ## What were the results?

  The results were great! We rolled out the check-in flow from the single pilot property to all MGM properties. The web check-in flow is still used today by many guests, and it's adoption is increasing.
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
