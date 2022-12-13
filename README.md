# v-o-i-d-r
The ultimate social network: write a post and watch it fade away into oblivion.

Created as a [joke on Mastodon](https://wandering.shop/@HBBisenieks/109474511388036692), implemented because you *commit* to the bit.

Still to do:
- [x] Keep the void from overflowing into the left column if your shout is too long
- [x] Move the uwu/OWO selector ~~to a collabsible menu~~
- [x] Move the OWO/uwu selector to a collabsible menu
- [x] Make an about page/modal
- [x] Fix font-size stuff
- [ ] Make the thing responsive for mobile?
- [ ] Docker-compose file for folks who want to run their own in a container???

## Docker instructions
They told us we were fools. They told us the void could not be contained. But we ignored them all. Will we ever pay for our hubris? Perhaps someday, but not today.

    docker build -t v-o-i-d-r
    docker run -it --rm -d -p 8080:80 --name voidr v-o-i-d-r