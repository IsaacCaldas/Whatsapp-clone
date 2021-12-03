

export class MicrophoneController {
  
  constructor(){
    navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(stream =>{

      this._stream = stream;

      let audio = new Audio();

      audio.src = new MediaStream(stream)
      audio.play();

    }).catch(err =>{
      console.error(err);
    });
  }
  stop(){
    this._stream.getTracks().forEach(track =>{
      track.stop();
    });
  }
}