const firebase = require('firebase');
//require('firebase/firestore');

export class Firebase {

  constructor(){
    
    this._config = {
      apiKey: "AIzaSyDEMKPbC-79Sv_-GABn2X65nLqR1aPLIss",
      authDomain: "whatsapp-clone-c395b.firebaseapp.com",
      projectId: "whatsapp-clone-c395b",
      storageBucket: "whatsapp-clone-c395b.appspot.com",
      messagingSenderId: "275845491943",
      appId: "1:275845491943:web:b287e12d9e76dc739ac642"
    }
    this.init();
  }

  init(){
    if (!this._initialized){
      firebase.initializeApp(this._config);

      firebase.firestore().settings({
        timestampsInSnapshots: true 
      });

      this._initialized = true;
    }
  }

  static db(){
    return firebase.firestore();
  }

  static hd(){
    return firebase.storage();
  }
}