Title: Slync-Twitter

About:
Implement a simple Twitter client as a single page application which initially shows general public tweets. Allow the user to specify a Twitter handle to view the tweets from. When a user requests a specific Twitter handle and the UI shows the latest tweets from that handle, there should also be a way to filter / search tweets by text. Also, once the user has selected a handle to view the Tweets from, the UI should periodically update with newer Tweets.

Libraries: twit

Technology: ReactJS (SPA), ExpressJS (server)

Functionalities:
1. Display general tweets
2. Search specific twitter handle
  1. Display 10 latest tweets
  2. Search specific keyword
    1. Display tweets with that keyword


BEFORE: sudo npm install

How to run:
1. npm run build
2. node server.js
  1. If have EACCES error, use sudo node server.js instead

Note: Did not delete credentials because I made new twitter account
