### Spotify Albums App

Spotify App that let You browse favourite albums and get some details about them.

App is presented in responsive manner, however it's much more comfortable to play around it on desktop.

Designed and prototyped in Adobe XD.

![spotify-app-search](readme-imgs/Search.jpg)

![spotify-app-album-details](readme-imgs/Album-details.jpg)

![spotify-app-error](readme-imgs/Error.jpg)

#### Functionalities: 
1. Searching any albums in Spotify, by their names. Each albums have:
  * cover image (or placeholder if image is not provided)
  * album name
  * artist name
  * numbers of tracks in the album

2. Filtering fetched albums in alphabetical/release date order.

3. Get each album details, which contains:
  * full album length
  * popularity rank
  * list with all tracks in the album along with their duration and link to actual song on Spotify online player

#### For developers [Setup instructions];

1. Register or login to your Spotify account and register an app [here](https://developer.spotify.com/dashboard/applications) to get CLIENT_ID and CLIENT_SECRET.

![spotify-app-registration](readme-imgs/1-register-spotify-app.jpg)

Edit the settings set Redirect URLs to http://localhost:8888/callback (hit add button and also save on page bottom!).

![add-redirect-url](readme-imgs/2-settingg-redirect-url.jpg)

2. Install project dependencies with `npm install` (both in spotify-app and albums-backend).

3. From spotify-app directory export your credentials:

  * for BASH: 
    ```
    $ export SPOTIFY_CLIENT_ID=YourClientIdNumber
    $ export SPOTIFY_CLIENT_SECRET=YourClientSecretNumber
    ```
    You can check if they were exported correctly by running: 
    ```
    $ echo $SPOTIFY_CLIENT_ID $SPOTIFY_CLIENT_SECRET
    ```

  * for Windows CMD:
    ```
    $ SET SPOTIFY_CLIENT_ID=YourClientIdNumber
    $ SET SPOTIFY_CLIENT_SECRET=YourClientSecretNumber
    ```

    Verify with: 
    ```
    $ SET
    ```

4. Cd to albums-backend and run `npm start`.

5. In spotify-app directory run `npm start` as well. NOTE: create-react-app runs by default on port 3000, but if You set it differently, You need to change it in albums-backend/server.js.

6. Go to http://localhost:8888/login and login to Spotify to start. You should be redirected to localhost:3000 with inserted access token as url parameter.

7. Acces token is valid for about an hour, after that You need to restart both servers.

#### Dependencies

* App utilize [Spotify API](https://developer.spotify.com/documentation/web-api/reference/)
* project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* OAuth helper service [OAuth bridge template](https://github.com/mpj/oauth-bridge-template)
* designed in [Adobe XD](https://www.adobe.com/pl/products/xd.html)
* layout made with [Flexbox Layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* BEM Methodology - [documentation](https://en.bem.info/)
* icons by [Flaticon](https://www.flaticon.com/home)
