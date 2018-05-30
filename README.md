# Seven hand poker

## Notes / hacks

* couldn't get dotenv/config working so accessing it directly in node modules
* don't want to commit dist, so running babel build on heroku, so has to be dependency instead of devDep
* can run `heroku run "yarn && yarn rollback"` to rollback the prod db manually (Also why dotenv is dev)
* can run `heroku pg:reset` to kill db and start again


## TODO

* Apollo cache resolver / query file
* styled components + ssr
* better eslint rules for react - it's not linting spaces or strings
* flow + prop types
* logger
* error middleware?
* Static assets for images / fonts etc (webpacked?)
* better react linter rules - strings and spaces especially
* better production builds e.g. hashed assets
* jest
* codecept
* CI - travis? circle? whats free now?
* Rename to boilerplate and fork for card game
* authentication
