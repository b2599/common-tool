function isEmpty(data){
  if(!data.length)
}

function isArrayEmpty(array){
  if(!array.length){
    return true;
  }
  return false;
}

function isStringEmpty(str){
  if(!str.trim()){
    return true;
  }
  return false;
}

function isTrue(bool){
  if(!bool){
    return false;
  }
  return true;
}
