# Seven hand poker

## Notes / hacks

* couldn't get dotenv/config working so accessing it directly in node modules
* don't want to commit dist, so running babel build on heroku, so has to be dependency instead of devDep
* can run `heroku run "yarn && yarn rollback"` to rollback the prod db manually (Also why dotenv is dev)
* can run `heroku pg:reset` to kill db and start again
