// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const express = require('express');
const morgan = require('morgan');

const app = express(); // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  /*  To use the Turbo 360 CMS, from the terminal run
      $ turbo extend cms
      then uncomment line 21 below: */

  // db: vertex.nedb()
}

vertex.configureApp(app, config);

// import routes
const leagueRoutes = require('./routes/league');
const valoRoutes = require('./routes/valorant');

// set routes
app.use('/league', leagueRoutes); // sample API Routes
app.use('/valorant', valoRoutes);

app.use(morgan('dev'));

app.use((res, req, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

//Routes that handle Requests
app.use('/league', leagueRoutes);
app.use('/valorant', valoRoutes);

app.use((req, res, next) => {
    const error = new Error('No such route was found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
