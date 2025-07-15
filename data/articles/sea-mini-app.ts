import { Article } from ".";

export const seaMiniApp: Article = {
  slug: "sea-mini-app",
  title: "A Mini App for Digital Artist: Sea",
  description: "Building my first mini app on Farcaster",
  bannerImg: {
    path: "/images/sea-mini-app.png",
    alt: "",
  },
  content: `
  # Learning about Mini Apps with _sea_
  *Solo Developer · React, TypeScript, Vite*

  ## Project Summary
  "Sea" is a digital artist in the crypto eco-system who was looking for someone to implement what's known as a "mini app". A mini app is a web application embedded in the Farcaster eco-system with
  additional native features such as access to blockchains and the social graph.

  ## The Goal
  The objective was to implement a very simple mini app "version 1" if you will. A starting point that can be easily improved upon. A first step into the world of mini apps.

## Under the Hood  
It's really just a basic React web app in this case. There were no asks to integrate with financial or social networks at this time, but the possibility is there.

The mini app mostly consists of a gallery page with later plans to add a shop page that integrates with the artist's digital collectibles and physical shopify shop.

### Implementation Highlights
- Basic image gallery page
- Dual page layout
- "Coming soon" shop page message
- Farcaster ecosystem integration

## Technical lift

It was really straight forward. The only tedious part was learning how to prepare the metadata such as the mini app manifest file. One cool aspect to the Farcaster mini apps is how
they are cryptographically linked to a Farcaster social media account.

The "owner" of the app logs in to Farcaster and indicates that the web app at a certain domain is "theirs" at which point a cryptographic process takes place to verify said ownership.
It's a cool idea, basically syncing your website with a decentralized social network account.

`,
  keywords: ["Farcaster", "miniapp", "crypto", "sea"],
  links: [
    {
      href: "https://farcaster.xyz/miniapps/z30tZvzOfQFC/sea",
      label: "Sea Mini App",
      openNewTab: true,
    },
  ],
  tech: ["React", "TypeScript", "Vite"],
};
