import sys
sys.path.append('..')
import spotipyModified as spotipy
from spotipyModified import client as client
from spotipyModified import oauth2 as oauth2
from spotipyModified import util as util

scope = 'user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read playlist-modify-public'
username='steadueddie'
token = util.prompt_for_user_token(username,scope,client_id='e6b98ce6b2cf483c832c652aada81bea',client_secret='5325fce64c6b4c4aad72b34029085111')

if token:
    print("Token:" + token)
    sp = spotipy.Spotify(auth=token)
    results = sp.current_user_saved_tracks()
    for item in results['items']:
        track = item['track']
        print (track['name'] + ' - ' + track['artists'][0]['name'])
else:
    print ("Can't get token for", username)