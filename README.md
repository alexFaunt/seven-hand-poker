# Seven hand poker

## Notes / hacks

* couldn't get dotenv/config working so accessing it directly in node modules
* don't want to commit dist, so running babel build on heroku, so has to be dependency instead of devDep
* can run `heroku run "yarn && yarn rollback"` to rollback the prod db manually (Also why dotenv is dev)
* can run `heroku pg:reset` to kill db and start again
* I can't see __

## TODO

* Static assets for images / fonts etc (webpacked?)
* better production builds e.g. hashed assets - may build on previous - might need manifest/stats
* Fix dependencies that are dev deps because of the dev set up - they might work so long as used in the heroku-postbuild hook?! dno try it now that it works
* Apollo cache resolver / query file set up
* styled components + ssr
* logger
* error middleware?
* jest
* codecept
* CI - travis? circle? whats free now?
* the babel command ignore /db/ does not work - fix it, no reason to babel those
* write a readme
* Rename to boilerplate and fork for card game

* authentication - password based or passport oauth?
