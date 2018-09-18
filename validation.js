var validation = {
  isEmpty: function(val)
  {
    if( val == "" || val == null || val == undefined || ( val != null && typeof val == "object" && !Object.keys(val).length ) ){
      return true
    }
    return false;
  },
  regExpTest: function(val, regExp)
  {
    if( !validation.isEmpty(val) && val.match(regExp) !== null ){
      return true;
    }
    return false;
  },
  isEmail: function(val)
  {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,6}$/i;
    //let regExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return validation.regExpTest(val, regExp);
  },
  isNumber: function(val)
  {
    let regExp = /^[0-9]+$/;
    return validation.regExpTest(val, regExp);
  },
  isAlphabet: function(val)
  {
    let regExp = /^[A-Za-z]+$/;
    return validation.regExpTest(val, regExp);
  },
  isKatakana: function(val){
    let regExp =/^[\u30a0-\u30ff]+$/;
    return validation.regExpTest(val, regExp);
  },
  isHirakana: function(val){
    let regExp =/^[\u3040-\u30ff]+$/;
    return validation.regExpTest(val, regExp);
  },
  isZenkaku: function(val){
    let regExp =/^[\u3040-\u309f]+$/;
    return validation.regExpTest(val, regExp);
  },
  chkStrMinLength: function(val, leng){
    if( typeof val === "string" && val.length > leng ){
      return true;
    }
    return false;
  },
  chkStrMaxLength: function(val, leng){
    if( typeof val === "string" && val.length < leng ){
      return true;
    }
    return false;
  },
  isStrLength: function(val, minLeng, maxLeng){
    if( validation.chkStrMinLength(val, minLeng) && validation.chkStrMaxLength(val, maxLeng) ){
      return true;
    }
    return false;
  }
};
