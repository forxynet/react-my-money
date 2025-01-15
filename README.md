# Firebase installation (local)

1) npm i firebase-tools
2) firebase init

select with press space 
1) Firestore Configure security rules and indexxes files for Firestore

2) Hosting: Configure files for Firesbase Hosting and (optionaly) set up Github Action deploys
   
   press [enter]
  
  1) Use an existing project [enter]
  2) mymoney-624a4 (myMoney) [enter]
  3)  What file should be used for Firestore Rules? (firestore.rules) [enter]
  4)   What file should be used for Firestore indexes? firestore.indexes.json [enter]
  5)  What do you want to use as your public directory? build [enter] 
  6)  Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y [enter]
  7)   Set up automatic builds and deploys with GitHub? (y/N) n [enter]
   
   ✔  Firebase initialization complete!
   

   # Deploy rules to firebase

   1) firebase deploy --only firestore [enter]

      ✔  Deploy complete!
   
   # Builgind & Deploy

   1) npm run build
   2) firebase deploy
   
   ✔  Deploy complete!

Hosting URL: https://mymoney-624a4.web.app

