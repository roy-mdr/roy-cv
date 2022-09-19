# Roy C.V.

## Setup

1. Make sure you have installed Git and Node.js + NPM

1. Open a terminal and clone repo using Git

    `git clone https://github.com/roy-mdr/roy-cv.git`

1. Cd to folder and run:

    `npm i`

    `COPY /Y .\src\lib\parallax.js .\node_modules\parallax-js\dist\parallax.js`

    > IMPORTANT TO RUN THIS COMMAND BEFORE RUN OR BUILD

    > This command is because there are unmerged PRs in Parallax.js library and haven't been able to compile on my own... So...

## Run / build

1. Run: `npm run dev` and go to http://127.0.0.1:5173/ or the URL shown in the terminal.
1. Build: `npm run build` and copy the contents of the just created *dist* folder to server.

## To Do

- [x] Add first project preview!
- [ ] Make modal component
- [ ] Prompt filter on page land? (what do you want to see?)
- [ ] Make it responsive 😬 (and fix mobile weird issues)
- [x] Add save settings to localStorage (lang, theme)
- [ ] Design "What's next?" section
- [x] Design "Education" section
- [x] Design "Skills" section (kinda done but...)
- [x] Design "Contact" section
- [x] Design "Languages" section
- [x] Move "Languages" section to the top
- [ ] Add hand-drawing sketch to end of page.
- [x] Update links
- [x] Make app icons
- [x] Add English language
- [ ] Add Deutsch language
- [ ] Find references :(
- [ ] Add router :) ?? necesary?