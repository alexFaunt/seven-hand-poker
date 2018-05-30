# Seven hand poker

## Notes / hacks

* couldn't get dotenv/config working so accessing it directly in node modules
* don't want to commit dist, so running babel build on heroku, so has to be dependency instead of devDep
* can run `heroku run "yarn && yarn rollback"` to rollback the prod db manually (Also why dotenv is dev)
* can run `heroku pg:reset` to kill db and start again


## TODO

* create a seed to add users
* webpack + webpack dec server
* create some react app stuff & make sure queries are done (client and server)
* styled components + ssr
* logger
* Static assets for images / fonts etc (webpacked?)
* flow + prop types
* better react linter rules - strings and spaces especially
* better production builds e.g. hashed assets
* jest
* codecept
* CI - travis? circle? whats free now?
* Rename to boilerplate and fork for card game
* authentication
