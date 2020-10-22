# Primus API

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

This API is used to display my League of Legends rank in my Twitch.tv chat.

If you want to see it in action go to my Twitch channel: https://www.twitch.tv/omni_primus and type: !elo in my chat.

## Show the Rank
If you want to see the json result that Nightbot puts in my chat you can use the following link:

```
https://primusapi-5gkjz1.vertex360.co/elo/omni_primus
```

If the link gives you no result, it's very likly that my Riot API Key expired. I'm still waiting to get a permanent key so I don't have to change the key daily.

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
After successfully installing the tool open the the site in your browser. Most likly it will be running on localhost:3000. Only the Route /elo is available to get 'GET' requests. Enter my Summoner Name after the /elo Route: /omni_primus. Only the following link should give you a result:

```
http://localhost:3000/elo/omni_primus
```
