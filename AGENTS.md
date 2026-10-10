# Den Lille Maler, Esbjerg — kundeside (afventer kunden)
Statisk HTML: `index.html` + `styles.css` + `app.js` + `404.html` (intet framework/build). Live https://denlillemaler.vercel.app · GitHub `Buurski/denlillemaler` · Vercel-projekt `denlillemaler`.
Kunde: Allan Schjern (ejer). Tog pænt nej, men bad Lucas gemme sin mail; status `afventer-allan-ingen-kontakt-nu` (2026-07-31: kontakt ham IKKE igen endnu). Status i kundenoten.
Hårde regler: `C:\Users\Buur\Documents\KnowledgeOS\context\hard-rules.md` (læs først). Router: `C:\Users\Buur\Documents\Websites\AGENTS.md`.

## Opgave | læs | læs IKKE
KB = `C:\Users\Buur\Documents\KnowledgeOS`. Gæt aldrig et faktum; står det ikke her eller i filen, skriv "ved ikke".

| Opgave | læs | læs IKKE |
|---|---|---|
| Tekst/indhold på siden | `index.html`, `KB\wiki\kunder\den-lille-maler.md`, `KB\context\brand-og-tone.md` | `C:\Users\Buur\_Arkiv`, andre kunders sites |
| Design/CSS | `styles.css` (tokens i `:root`), `index.html` | nye farver/skrifter udenfor tokens; `Lillemaler-handoff\` (gammelt Claude Design-bundle, untracked) |
| SEO | `index.html` (title, meta, schema), `KB\wiki\kunder\den-lille-maler.md` (flytning: bevar domænet; 301-redirects i `vercel.json`, som endnu ikke findes) | generiske SEO-skabeloner uden at tjekke siden |
| Deploy | `C:\Users\Buur\Documents\Websites\AGENTS.md`, `KB\wiki\os\agents-detaljer.md` (afsnit "Deploy-disciplin") | `.vercel\` (projekt-id, rør ikke) |
| Kinly-priser, startpris, tilbud | `KB\context\priser.md` (kanon; hjemmeside fra 3.997 kr) | gamle tilbud i wiki; individuelle aftaler afviger |
| Kundefakta, kontakt, status, log | `KB\wiki\kunder\den-lille-maler.md` | `C:\Users\Buur\Documents\Kunder\`, `.send_queue\` |
| Adresser (kunder, bl.a. Ikast Autoservice), tværgående fakta (Planuko-wordmark, HQ-gates, modelvalg) | `KB\context\fakta.md` | Lucas' privatadresse må aldrig stå nogen steder |
| Selskab, CVR, adresseregel | `KB\context\selskab.md` | |
| Mails/udgående tekst til kunden | `KB\context\brand-og-tone.md`, `KB\context\forbidden-phrases.md` | |
| Alle repos og sites | `C:\Users\Buur\Documents\REPOS.md`, `C:\Users\Buur\Documents\Websites\SITES.md` | |

## Kommandoer
Ingen `package.json`, ingen build, ingen `verify`-script.
- Dev: `python -m http.server 8080` i repo-roden → http://localhost:8080
- Deploy: kun Lucas merger til `main`. `vercel deploy --prod` kun efter Lucas' ja.

## Arkitektur (kort)
- Tokens i `:root`: `--red` (#C7311E), `--blue` (#1E3A5F), `--cream`, `--paper`, `--ink`, `--ff-display` (Bricolage Grotesque), `--ff-serif` (Instrument Serif), `--ff-body` (Manrope). Afvig aldrig.
- Sektioner (id): `site-header` → `hero` → `services` → `about` → `gallery` → `testimonials` → `area` → `cta` → `site-footer`. `app.js` = interaktioner (85 linjer).
- Allans pris (5.000 kr / 6.500 kr med Decap CMS; drift 250/500 kr/md) er en individuel aftale, ikke Kinly-kanon. Siden ejer Allan 100 %.
- Untracked, rør ikke og commit ikke: `Mail-til-Allan.md` (kladde, ikke sendt), `NOTAT-Allan-internt.md`, `Lillemaler-handoff\`, `.gitignore`.

## Regler
1. Aldrig `main` uden Lucas: ny gren + Vercel-preview, Lucas merger. Samler ændringer; maks 2-3 prod-deploys/dag; `[skip vercel]` ved docs.
2. "Done" = live-check: åbn preview/prod og print HTTP-status eller screenshot; ikke kun "ser rigtigt ud i koden".
3. Udgående (mails, SMS, opslag til Allan) er KLADDER; Lucas sender selv. Intet sendes, ingen konti, køb eller DNS. Ingen kontakt til Allan før Lucas siger til.
4. Dansk. Ingen AI-slop (ingen gradient-blobs, emoji-ikoner, fyldtekst). Palet: rød + navy + varm creme.
5. Én kode-agent pr. worktree; commit med eksplicit `git add <sti>`, aldrig `git commit -a`; ingen stash/reset/clean.
