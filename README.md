# Deployed Link 
[Angular App]( https://uc-project-f919f.web.app)

## Deploy Steps :
- In local machine bulid AOT files using
<pre>
  ng build --configuration=production
</pre>
- After building the dist file we used firebase cli to deploy
<pre>
   malhaimouni: path: /home/malhaimouni/training/ang-uc/u-project | 10 files | size 496Kb | branch: [main] |
 └─ $~ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/malhaimouni/training/ang-uc/u-project

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: uc-project-f919f (uc-project)
i  Using project uc-project-f919f (uc-project)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist/u-project
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/u-project/index.html already exists. Overwrite? No
i  Skipping write of dist/u-project/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
 malhaimouni: path: /home/malhaimouni/training/ang-uc/u-project | 11 files | size 504Kb | branch: [main ?] |
 └─ $~ firebase deploy

=== Deploying to 'uc-project-f919f'...

i  deploying hosting
i  hosting[uc-project-f919f]: beginning deploy...
i  hosting[uc-project-f919f]: found 16 files in dist/u-project
✔  hosting[uc-project-f919f]: file upload complete
i  hosting[uc-project-f919f]: finalizing version...
✔  hosting[uc-project-f919f]: version finalized
i  hosting[uc-project-f919f]: releasing new version...
✔  hosting[uc-project-f919f]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/uc-project-f919f/overview
Hosting URL: https://uc-project-f919f.web.app
</pre>
