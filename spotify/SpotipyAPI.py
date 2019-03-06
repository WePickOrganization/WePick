import sys
sys.path.append('..')
import spotipy
import spotipy.oauth2 as oauth2
import spotipy.util as util
import pprint
import json
from db import DatabaseConnector

# Function which creates recommendation based of an artist id/ids
def GeneratePlaylist(artistsID):
    
    username = input("Enter username: ")

    scope = 'user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-modify-public'

    token = util.prompt_for_user_token(username,scope,client_id='0dc45951e1c9441db418cfcd3950414f',client_secret='5efbb9963b654491bb2024f13c1eccf8',redirect_uri='http://localhost/')

    # Spotify Object
    spotifyObject = spotipy.Spotify(auth=token)
    
    Recommendation = spotifyObject.recommendations(seed_artists= artistsID, limit=20)
    RecommendationList = []
    for i in range(20):
        pprint.pprint("In function! song reccommend = " + Recommendation['tracks'][i]['id'])
        RecommendationList.append(Recommendation['tracks'][i]['id'])

    pprint.pprint(RecommendationList)
    return RecommendationList

# Function which converts artist name to id (Very slightly glitchy)
def GetArtistID(artists):
    username = input("Enter username: ")

    scope = 'user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-modify-public'

    token = util.prompt_for_user_token(username,scope,client_id='0dc45951e1c9441db418cfcd3950414f',client_secret='5efbb9963b654491bb2024f13c1eccf8',redirect_uri='http://localhost/')

    # Spotify Object
    spotifyObject = spotipy.Spotify(auth=token)
    array_length = len(artists)
    pprint.pprint(array_length)
    artistsList = []    
    for i in range(array_length):
        artistID = spotifyObject.search(artists[i])
        artistID = artistID['tracks']['items'][0]['artists'][0]['id']
        artistsList.append(artistID)
        pprint.pprint("Artist name: " + artists[i] + " : Artist ID: " + artistID)

    return artistsList

# Function which creates playlist of a given list 
def CreatePlaylist(tracks):
    username = input("Enter username: ")

    scope = 'user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-modify-public'

    token = util.prompt_for_user_token(username,scope,client_id='0dc45951e1c9441db418cfcd3950414f',client_secret='5efbb9963b654491bb2024f13c1eccf8',redirect_uri='http://localhost/')

    # Spotify Object
    spotifyObject = spotipy.Spotify(auth=token)
    spotifyObject.trace = False
    playlists = spotifyObject.user_playlist_create(username, "Recommended", public=True)
    spotifyObject.user_playlist_add_tracks(username, playlist_id=playlists['id'], tracks=tracks)
    pprint.pprint("Successfully created playlist")   

##########################################################################################
############################### Connect to database ######################################
def testFunction():
    #databaseConnection = DatabaseConnector.DatabaseConnector()
    #databaseConnection.showUsersFavArtist()

    #databaseList = databaseConnection.showUsersFavArtist()
    #print(type(databaseList))
    #pprint.pprint(databaseList)

    ##########################################################################################
    ################### Current authentication (need to make not hardcoded) ##################

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

    ##########################################################################################

    # Simple artist list
    Artists = ['Eminem','Rihanna','Travis Scott']

    ## Convert artists -> artistid
    ArtistsID = GetArtistID(Artists)

    ## Get back track list of recommentations
    Tracks = GeneratePlaylist(ArtistsID)

    ## Create playlist of these tracks 
    CreatePlaylist(Tracks)

    pprint.pprint(ArtistsID)
    pprint.pprint(Tracks)






