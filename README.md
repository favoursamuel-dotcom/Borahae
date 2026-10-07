# Borahae Club

An independent BTS and ARMY fan website built with HTML, CSS and vanilla JavaScript.

Live site: https://borahae-club.nyafavour66.chatgpt.site

## Features

- Seven member profiles with 2026 ARIRANG portraits and solo listening guides
- 27 songs with search, BTS/solo filters and official YouTube video embeds
- Song meaning summaries, Korean vocabulary and links to translation resources
- Karaoke searches and a temporary lyric-study notes area
- 75 trivia questions across easy, medium and hard levels
- Ten-question randomized rounds, shuffled answers, scores and answer reviews
- Member name matching, an era guide and ARMY basics
- Responsive desktop and mobile layouts

## Contributions and AI assistance

Favour Nya proposed the website, selected its features, reviewed the result and directed improvements. ChatGPT generated the HTML, CSS and JavaScript implementation and helped research and organize the content. This project is presented as AI-assisted work, not as entirely independently written code.

## Run locally

Extract this ZIP and open the borahae-club folder in VS Code. For a quick look, open index.html in your browser.

For a local web server, run this command from the folder containing index.html:

```bash
python3 -m http.server 8000
```

On Windows, you can use `python -m http.server 8000` instead.

Open http://localhost:8000 in your browser. Stop the server with Ctrl+C.

No npm installation, database, API key or Python web framework is required. Internet access is needed for YouTube videos, Google Fonts and external links. Video playback depends on YouTube availability and embed permissions; each player includes a direct YouTube link.

## Files

| File | Purpose |
| --- | --- |
| index.html | Page structure, navigation and script loading |
| style.css | Theme, layouts and responsive styles |
| content.js | Detailed profiles and additional song data |
| questions.js | Question banks, answer explanations and source links |
| quiz-engine.js | Question rotation and array shuffling |
| app.js | Profile switching, music search, games and UI interactions |
| bts.jpg | Group portrait |
| portraits/ | Individual member portraits |

Load the scripts in the order already used in index.html. Later scripts depend on data and functions declared in earlier scripts.

## Editing

- Add song entries to extraSongs in content.js. The original six songs are in app.js.
- Edit profileDetails in content.js to update detailed member profiles.
- Add trivia rows under easy, medium or hard in questions.js. Each row contains a prompt, correct answer, three distractors, explanation, topic and source key.
- Change colors and layout in style.css.

Question history and quiz state last only for the current page session. Practice notes are also temporary and are cleared when the page reloads.

## Add to GitHub

1. Create a new repository named borahae-club on GitHub.
2. Choose Add file > Upload files.
3. Upload the contents of this folder, including the portraits folder. Extract the ZIP first; do not upload only the ZIP.
4. Commit the files and put the live website URL in the repository About section.

The repository root should contain index.html and README.md directly. A separate portfolio website is not required.

## Credits and assets

- BTS facts and release references: BIGHIT MUSIC official profile and discography, https://bts.ibighit.com/eng/profile/ and https://bts.ibighit.com/eng/discography/
- Group photo: BIGHIT MUSIC official Proof-era profile image, https://bts.ibighit.com/images/profile/proof/member/bts-pc.jpg
- Individual portraits: March 2026 ARIRANG individual vinyl-cover images, credited to BIGHIT MUSIC / HYBE and reproduced by Koreaboo. Source: https://www.koreaboo.com/news/bts-newly-released-concept-photos-sparks-massive-backlash/
- Official music videos are embedded from their respective YouTube uploads; no audio or video files are bundled.
- Full lyric translation resource: Doolset Bangtan, https://doolsetbangtan.wordpress.com/
- Fonts: DM Sans and Space Grotesk through Google Fonts.

Song meaning summaries and vocabulary guides are not full lyric translations. Full copyrighted lyrics are not bundled.

This is an independent fan project, not affiliated with BTS, BIGHIT MUSIC or HYBE. Third-party photos, music, trademarks and other assets remain the property of their respective owners; including them here does not grant a license to those assets. Preserve the credits when sharing this project.
