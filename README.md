# dirReader

Use Browserify (with jQuery) and Node to list directory files

## Features

- Dynamically pulls a list and adds link to any reports added to `staticreports` directory

## Development

- for development using browserify
- cd to claimweb and cli: `gulp watch --module dirReader`
    *  writes to `./modules/<module>/src` folder
- for production build
    *  cli: `gulp --module dirReader`
    *  build css and js into `./js` folder