# photo-albums
cli for fetching photo information, formatting it and showing it in the terminal.

## Usage
```
    options:
        -h, --help                 Show the help menu
        -a [?]                     Choose a specific album to view information on, where ? is the albumId
        -r start,end               Provide a range of albums to view, ex. photo-album -r 1,4
        -u --available-albums      Show a list of albumIds available to choose from
        -A, --all                  Show all albums
```

## Prerequisites
This project uses node. I recommend installing `nvm` to manage node versions on your machine if you don't have this already. 
If you don't want to use `nvm`, the node version the project was built with is tagged in the `.nvmrc` file in the root directory of the project.

Once you have `nvm`: 
- run `nvm install 16.14.0`
- run `nvm use`
- `npm install` to install dependencies

## Running the app
I couldn't find a way to run the app as a cli without installing something, but the following works:
- Install the package globally `npm install -g .`
- You can now run `photo-album`
- Once you're done, uninstall from the global space with `npm uninstall -g photo-album`

The cli comes with a help menu that's shown if you type `photo-album` with no arguments or `photo-album -h` or `photo-album --help`

## Tests
This project uses `eslint` for code style and `jest` for tests.
- `npm test` runs both the linter and the tests
- Alternatively they can be run separately with `npm run unit` or `npm run lint`
