















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y6jOBT9F7+SnrAvkUoaICFAliZkz2genNgQwlrGQEgr/z6iUqUqqbcaqXmyjH187r3n3PsNZHlU4gluweAbKEhUQ4q7JW0LDAbAqIIAE9ADCFIIBsC02atbm1p8sadoITgqXER2HRwoZtfH1G3sax3Q+ZVO7cUTuPdAUR2T6PQLQMG5LfraPjlU7io6DmlgsYlWLrAynU94NBe8axrsVWgOs/gJ3DtEGJEoC0fFGaeYwGSCWw9G5HP0lxYK1GZ7ud5Sagrmen2GxPg6vK2Rvh5dJ5UXMZCMd8OMdz5Hfwrtfry8We0UWs9e5t7GDqo3scLI8bFudu1cEOXdzO+f9Vf6ZRRmGDkIZzSi7afzrn+NG75J4sgb+tv+fNWUi1ry3Y0lZXOfL7MJr5bL0khv8Sfzzk8Z0ld4IY4mTmtyvDsssxP/ldziqQCXMq7LlbnaK6xtNR+Je+RNK/H/yft2tgvi82FeaQ2Tk2yUhtJ+Iy2Puaelbn9fqJ4Ut+jqOWv9c/QvWnuY0om7MkRtBYdI8ft2xMwOfc+vJXWmXIRn2G+OpnCdvdOHtCK/TLLiq3HN7UV+nNg653Hqan0e28zxEqJbOAqGeuw7SZRkV6diRGN89Zj1fEnMwjjr/GbHOWkTWUGyvZROY6+2k6XY3130p5eIYtw6CAy4ew8QHEYlJZBGefayxwo9AFG9xCeC6Ut6wXJS1TaXpO5NPqn7wN6vrmfmWCbZ3K2ismICwXLkbaOeg+YJ9EBB8hMuS4zsqKQ5aWe4LGGISzD456VSXdAEpznFboS66kuiwqmqIGmC8Hf5V3OGtIRF8VeGKeiBgOTpDIMBJRXugZcLQ1GSpZHEmrxussbQEjXFkCxF5BVhpIis1IWYPh5dRSkuKUwLMOAUUeQ1WdW4e+/P8GA1y1AESzV4ReZknuUVSeMt1TJUXhGNofwbHvyf4qFqqmjymiHr2ki1+JGqqupIH6mizAqcKnK/5KEJ3P3fHsjwlT781KlA4HogiEhJ11lVJDlEb2Z7+wlPp7zK6LLNTma3wAQMPmxjSqMsLLvIqgyS0zmqsdnFAQYBTEp87wGE6+iEOzyw2jROYqQrP1wGE7bOdt48eG46JZ3z7HEEakdFFVXlCy+z8IsoaNKX40nDX5DIIw2JR1ZUONCl49HKujs/dRbyt4oUuarh241juGLBFIuQX40ZN39xx8MSmGD0luUjPMVVscpjnP0CV+Ybn2Um7s06dt5XZiiRGlfZhlj8gPuwGhh8ex8fZo46PFHbLS1LGIKuWt0736lhIMrfCyKD3WmwzuIsb7LuodcqdBAIUxglZTcsnaypypExmmwFQVHHY30U6maog/eqvXWlh+uxaHB6NpWz2WJPpp7IuhutgWGaJ/uNNteptRExrn3GM/OnH4CAAahuPLrM4Y40J3hNbAkvUTI3PJuQ/i2Mk3FxiJ4Ph7wvaY7MB0nJyMShrYHE+gz9omxj/sQcdqzV2Xtx4shzf9gYXQt7U8/Hx1iTtjvCjfQl5pPyyJfr64WpEJkieg72U8ancV+omOKMv64cSQyUBfbouoUT54oszIhhZI6mGudErrY/W9xJD4f+OXz0y5d+nbzOyei1kz20FkT4Zey8VuG31XqXPXvvfcB4HWQ/kZaxq3S0cFumuI3Gk/bGzM1NcBrn7rO7tYLVYupvsJ0RNrg0z+De+blIIA1yknbeyRDJIwR6IIEl1d+d+4OmpAo9kLZ6USwppG+GB3r3OagE9/8A0AwObKMJAAA=',
    PREFIXE: process.env.PREFIX || "#",
    OWNER_NAME: process.env.OWNER_NAME || "EMINEM",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 254718835933",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'EMINEM',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
