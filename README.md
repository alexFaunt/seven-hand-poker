# Seven hand poker

## Notes / hacks

* couldn't get dotenv/config working so accessing it directly in node modules
* don't want to commit dist, so running babel build on heroku, so has to be dependency instead of devDep
* can run `heroku run "yarn && yarn rollback"` to rollback the prod db manually (Also why dotenv is dev)
* can run `heroku pg:reset` to kill db and start again
* I can't see __

## TODO

* better production builds e.g. hashed assets - long lived cached libs - might need manifest/stats
* Apollo cache resolver / query file set up
* react helmet
* logger
* error middleware?
* component did catch error top level
* storybook
* jest
* codecept
* CI - travis? circle? whats free now?
* the babel command ignore /db/ does not work - fix it, no reason to babel those
* write a readme
* Rename to boilerplate and fork for card game

* authentication - password based or passport oauth?
