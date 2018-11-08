var modal = {
  openModal : function(){
  
  },
  openBlackScreen : function(){
    let blackScreen = document.createElement("div");
    let blackScreenStyle = blackScreen.style;
    let style = {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: '#000000',
      opacity: 0.7,
      position: 'fixed',
      zIndex: 100
    };
    for (let row in style) {
      blackScreenStyle[row] = style[row];
    }
    
    let body = document.body;
    body.appendChild(blackScreen);
  }
}
