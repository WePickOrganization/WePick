import spotipy
import spotipy.oauth2 as oauth2
import spotipy.util as util
import pprint
import json
import sys
sys.path.append('..')

from db import DatabaseConnector


databaseConnection = DatabaseConnector.DatabaseConnector()
databaseConnection.showUsersFavArtist()

databaseList = databaseConnection.showUsersFavArtist()
print(type(databaseList))
pprint.pprint(databaseList)

# Client ID e6b98ce6b2cf483c832c652aada81bea
# Client Secret 5325fce64c6b4c4aad72b34029085111

## Keith Client Key for test ##
# Client Id: 0dc45951e1c9441db418cfcd3950414f
# Client Secret: 5efbb9963b654491bb2024f13c1eccf8

# Prompt for the username of the Spotify account we want to search for
username = input("Enter username: ")

# Define the scope of the information we want to recieve so the user has some idea of what information the application is recieveing
# https://developer.spotify.com/documentation/general/guides/scopes/
scope = 'user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-modify-public'

# This token is generated in the web browser
# Can change redirect_uri to website name soon and parse it somehow
# Once token has been generated, copy into command prompt
# This should only have to be done once hopefully.
token = util.prompt_for_user_token(username,scope,client_id='0dc45951e1c9441db418cfcd3950414f',client_secret='5efbb9963b654491bb2024f13c1eccf8',redirect_uri='http://localhost/')


# Spotify Object
spotifyObject = spotipy.Spotify(auth=token)

# Information about user
# Get current device

# User information
user = spotifyObject.current_user()
displayName = user['display_name']
followers = user['followers']['total']

# Create Playlist
spotifyObject.trace = False
playlists = spotifyObject.user_playlist_create(username, "test", public=True)

# Track ids
tracks = ["1pAyyxlkPuGnENdj4g7Y4f", "7D2xaUXQ4DGY5JJAdM5mGP"]
["spotify:track:" + track for track in tracks][0]
print(playlists['id'])

spotifyObject.user_playlist_add_tracks(username, playlist_id=playlists['id'], tracks=tracks)

## Convert to artist id (Bugy)
artistID = spotifyObject.search("{Eminem}")
artistID = artistID['tracks']['items'][0]['artists'][0]['id']
pprint.pprint("artist id: " + artistID)

## Recommendations
Recommendation = spotifyObject.recommendations(seed_artists= ["3TVXtAsR1Inumwj472S9r4"], limit=5)
pprint.pprint("song reccommend = " + Recommendation['tracks'][0]['id'])

# Print playlist info (Json)
pprint.pprint(playlists)

# Show basic stats of user 
print("Display Name: " + displayName + " Followers :" + str(followers))




