Interview
=========

This is an app for conducting and recording interviews.

Interviews are structured using [FLP websites](https://github.com/nathanathan/FeelsLikePHP).

All the page transitions are logged making it possible to tell where in the recording a particular question is being answered.

The second half of this project will be a website that annotates the audio timeline with the page the interviewer is on,
and that makes it possible to search through recordings for responces to particular questions.

Technologies
------------

The app is currently being designed to run on mobile devices using Cordova.
It uses the Cordova Media object to capture audio.
The website for data exploration will probably be a couchapp.


Storage
-------

My initial plan was to use CouchDB however I ran into CORS issues when trying to do remote submission, and if I were to try to make a couchapp for use with [Mobile Futon](https://github.com/daleharvey/Android-MobileFuton) I wouldn't be able to easily access the Cordova Media object from it.

Now I'm planning to use Dropbox, but there are a few different approaches:

A. Save everything to a folder that gets synced via [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&hl=en)
B. Do all the syncing through JavaScript code included in the application.

I'm leaning towards B because:
-Only one app needs to be installed, and operated, so it should be easier for the user.
-Syncing media files might be slightly harder, but I might find it useful to have more control over them.

I'm thinking it will work something like this:
User clicks a Sync data on the main interview page.
A child window is created if necessairy to log in to dropbox.
A wait dialog is displayed.
Sessions are saved in individual files,
log items are saved as collections in files named by the session id (saving them individually would be a LOT of http requests).
Then the recording is saved if it's not already on the server.
I'm not quite sure how additional annotations should work.
Since they may be added and removed by multiple users there could be revision control problems.

There is a [Backbone Dropbox Sync Adapter](http://coffeedoc.info/github/dropbox/dropbox-js/master/classes/Dropbox/Client.html) that could helpful.

[This documention for the Dropbox js client api should also help.](http://coffeedoc.info/github/dropbox/dropbox-js/master/classes/Dropbox/Client.html)


Media Capture
-------------

* I'm confused about how to handle audio across all platforms.

Cordova has a Media object that does everything I need, however it is not present in browsers.

http://chromium.googlecode.com/svn/trunk/samples/audio/index.html

https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/webrtc-integration.html

TODO:
-----

0. Older adroid device does not seem to be seeking correctly.
1. Make page links work in explorer
2. Fix filter/sort in explorer
3. Refactor explorer.html
4. Make page links open a menu?
5. Put times in minutes/seconds
6. Introduce another type of marker beside log items for marking themes.*
7. Add way to generate guides without using html. Maybe something like xlsform?
(Also generate sidenav that shows where you are in the interview.*)

*Thanks to Beth K for these ideas.

Notes on organization:
----------------------

Currently the app is designed to be built with a single interview definition.
