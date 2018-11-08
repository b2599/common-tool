var modal = {
  openModal : function(){
    let modal = document.createElement('div');
    let modalStyle = modal.style;
    let style = {
      width: '50%',
      height: '50%',
      top: '50%',
      left: '50%',
      position: 'fixed',
      transform: 'translate(-50%,-50%)',
      zIndex: 101,
      backgroundColor: '#ffffff',
      border: '1px solid #000000',
      borderRadius: '8px'
    };
    for (let row in style) {
      modalStyle[row] = style[row];
    }
    let body = document.body;
    body.appendChild(modal);
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
