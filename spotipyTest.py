import spotipy
import spotipy.oauth2 as oauth2
import spotipy.util as util

# Client ID e6b98ce6b2cf483c832c652aada81bea
# Client Secret 5325fce64c6b4c4aad72b34029085111

# Prompt for the username of the Spotify account we want to search for
username = input("Enter username: ")

# Define the scope of the information we want to recieve so the user has some idea of what information the application is recieveing
# https://developer.spotify.com/documentation/general/guides/scopes/
scope = 'user-read-email'

# This token is generated in the web browser
# Can change redirect_uri to website name soon and parse it somehow
# Once token has been generated, copy into command prompt
# This should only have to be done once hopefully.
token = util.prompt_for_user_token(username,scope,client_id='e6b98ce6b2cf483c832c652aada81bea',client_secret='5325fce64c6b4c4aad72b34029085111',redirect_uri='http://google.com/')

