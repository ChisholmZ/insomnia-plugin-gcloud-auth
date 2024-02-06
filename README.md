# Google Cloud Authentication for Insomnia

This is a plugin for [Insomnia](https://insomnia.rest/) that automates creating access tokens for making API calls to authenticated Google Cloud.

access tokens have a short lifetime, and it can be annoying to have to manually refresh them during development. This plugin automatically refreshes the token by executing `gcloud auth print-access-token` before each request.
  
## Usage
Ensure you have installed the [Google Cloud SDK](https://cloud.google.com/sdk/install) and its bundled `gcloud` command-line interface.
  
Create a Bearer Token authentication and add the "Google Cloud Access Token" template tag as the token value.
  
The settings specify a default path to the `gcloud` executable of `~/google-cloud-sdk/bin`. If it is somewhere else on your machine you may need to change it.
 
Note that this plugin has only been tested on Mac OS X. 
