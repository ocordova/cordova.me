const llmsText = `# Óscar Córdova

> Personal site of Óscar Córdova, a product-driven engineer and CTO based in Mexico. Writing draws from product engineering, Zen and Taoist philosophy, and Mexican culinary heritage.

## Pages

- [Home](https://cordova.me/): Introduction and what Óscar is doing now
- [Thoughts](https://cordova.me/thoughts): Essays on product engineering and ways of working
- [Bookmarks](https://cordova.me/bookmarks): Curated links worth keeping
- [Uses](https://cordova.me/uses): Tools, hardware, and software he uses
- [Colophon](https://cordova.me/colophon): How this site is built

## Thoughts

- [Outcomes over output](https://cordova.me/thoughts/outcomes-over-output)
- [Shifting from code-centric to product-driven](https://cordova.me/thoughts/shifting-from-code-centric-to-product-driven)
- [The struggle of a product-driven engineer in sales-first companies](https://cordova.me/thoughts/the-struggle-of-a-product-driven-engineer-in-sales-first-companies)
- [Exploring product-market fit with outcome-focused roadmaps](https://cordova.me/thoughts/exploring-product-market-fit-with-outcome-focused-roadmaps)
- [Exploring product discovery through one-on-one interviews](https://cordova.me/thoughts/exploring-product-discovery-through-one-on-one-interviews)
- [Navigating complexity through prioritized sprint backlogs](https://cordova.me/thoughts/navigating-complexity-through-prioritized-sprint-backlogs)
- [Embracing simplicity in code formatting and linting](https://cordova.me/thoughts/embracing-simplicity-in-code-formatting-and-linting)
- [Telegram bot with Apps Script](https://cordova.me/thoughts/telegram-bot-with-apps-script)
`;

export const loader = () => {
  return new Response(llmsText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
