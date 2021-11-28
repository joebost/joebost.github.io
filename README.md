## Notes

- Heavily inspired by http://ianenders.com/

## Cmds

- `npm install` - install dependencies
- `npm start` - run app in dev mode on [http://localhost:3000](http://localhost:3000)
- `npm run release` - deploy prod build to github pages

## How to update site
- changes pushed to master do not update the site, the site tracks the gh-pages branch which holds the prod builds
- `npm run release` - makes a prod build and pushes the changes to gh-pages which will update the site
- Note: this will remove the custom domain on the site, and you have to manually re-enable it in the repo settings
