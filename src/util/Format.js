export class Format {
  
  static getCamelCase(text){

    let div = document.createElement('div');

    div.innerHTML = `<div data-${text}="id"></div>`;

    return Object.keys(div.firstChild.dataset)[0];
  }

  static toTime(duration) {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }
 /*  -- CÓDIGO SE NAO HOUVESSE ESSES 2 MÉTODOS: TOSTRING() E PADSTART() --

    if(hours > 0) {
      if(hours < 10){
        if(minutes < 10){
          if(seconds < 10){
            return `0${hours}:0${minutes}:0${seconds}`;
          }
          else {
            return `0${hours}:0${minutes}:${seconds}`;
          }
        }
        else if (minutes > 10 && seconds < 10){
          return `0${hours}:${minutes}:0${seconds}`;
        }
        else {
          return `0${hours}:${minutes}:${seconds}`;
        }
      } 
      else{
        if(minutes < 10){
          if(seconds < 10){
            return `${hours}:0${minutes}:0${seconds}`;
          }
          else {
            return `${hours}:0${minutes}:${seconds}`;
          }
        }
        else if (minutes > 10 && seconds < 10){
          return `${hours}:${minutes}:0${seconds}`;
        }
        else {
          return `${hours}:${minutes}:${seconds}`;
        }
      }
    }

    if(minutes > 0) {
      if(seconds < 10){
        return `${minutes}:0${seconds}`;
      }
      else {
        return `${minutes}:${seconds}`;
      }
    }

    if(seconds > 0) {
      if (seconds < 10){
        return `0:0${seconds}`;
      } else {
        return `0:${seconds}`;
      }
    } else {
      return `0:00`;
    }
  } */
}

// SE NAO FUNCIONAR OS 0, VOLTAR NO MINUTO 2:25 