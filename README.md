# Primus API

Full Project Repository:

```
https://github.com/omni-primus/primusapi/tree/master
```

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co
This API is used to display the League of Legends or VALORANT rank in a twitch.tv chat.
If you want to see it in action go to my Twitch channel: https://www.twitch.tv/omni_primus and type: !elo in the chat.

## Show the Rank
If you want to see the json result that Nightbot puts in my chat you can use the following link:

```
https://primusapi-5gkjz1.vertex360.co/league/omni_primus
```

## Instructions
After cloning into repo, cd to project root directory and install dependencies:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```
## Show the Rank local
After successfully installing the tool open the site in your browser. Most likly it will be running on localhost:3000. Only the Routes /league and /valorant are available to recieve 'GET' requests. Enter my Summoner Name after the /league Route: /omni_primus. Only the following links should give you a result:

```
http://localhost:3000/league/omni_primus
http://localhost:3000/valorant/
```
