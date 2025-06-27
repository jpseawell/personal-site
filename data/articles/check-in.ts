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
*Lead Front-End Engineer · React, TypeScript, Next.js*

## Project Snapshot  
The Web Check-In flow (aka *WCI*) is a Next.js web app built on the MGM Web Platform. It’s a micro-front-end rendered inside the MGM shell, which supplies the standard header and footer.

## The Pain We Solved  
Lobby lines at a large hotel aren’t fun. As part of the *Front Desk of the Future* effort, I built a web flow that lets guests check in from the comfort of their browser.

## Under the Hood  
The Web Check-In Flow is a sequence of pages that guide guests through the entire process.

### Five-Step Guest Journey  
1. Start page (reservation lookup)  
2. Room add-ons and upgrades  
3. Identity verification  
4. Payment validation  
5. Review & check-in  

### Implementation Highlights  
- An app-state context tracks each guest’s progress.  
- Every page fires one GraphQL query for data.  
- If a guest abandons the flow, they start over.  
- Guests are redirected to a third-party ID-verification flow, then returned as verified users.  
- On check-in, reservation data hits the back end to switch the reservation to “checked-in.”  
- Non-sensitive data lives in session storage.

## Roadblocks & Fixes  

### Racing the Clock  
An MVP had to ship in under three two-week sprints. One extra Saturday later, the pilot launched on time.

### Taming the Full-Refresh Bug  
The inherited shell triggered a full page refresh on route changes, wiping app state. The bug appeared only in certain environments, but once identified, I refactored navigation to keep state intact.

## Impact in the Wild  
The pilot property rolled out smoothly, and WCI is now live across all MGM properties. Adoption keeps climbing as more guests choose the hassle-free web check-in.

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
