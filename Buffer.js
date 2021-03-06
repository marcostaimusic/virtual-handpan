class Buffer {
    
    constructor(context, urls) {  
      this.context = context;
      this.urls = urls;
      this.buffer = [];
    }
    
    loadSound(url, index) {
      let request = new XMLHttpRequest();
      request.open('get', url, true);
      request.responseType = 'arraybuffer';
      let thisBuffer = this;
      request.onload = function() {
        // Safari doesn't support promise based syntax
        thisBuffer.context
          .decodeAudioData(request.response, function(buffer) {
            thisBuffer.buffer[index] = buffer;
            updateProgress(thisBuffer.urls.length);
            if(index == thisBuffer.urls.length-1) {
              thisBuffer.loaded();
            }       
          });
      };
      request.send();
    };
    
    getBuffer() {
      this.urls.forEach((url, index) => {
        this.loadSound(url, index);
      })
    }
    
  
    
    getSound(index) {
      return this.buffer[index];
    }

   
  
  }

  