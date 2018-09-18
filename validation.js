var validation = {
  function isEmpty(value)
{
  if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
    return true
  }
  return false;
}

function validationTest(value, regExp)
{
  if(!isEmpty(value) && value.match(regExp) !== null){
    return true;
  }
  return false;
}

function isEmail(value)
{
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  
  return validationTest(value, regExp);
}

function isNumber(value)
{
  let regExp = /^[0-9]+$/;
  
  return validationTest(value, regExp);
}

function isAlphabet(value)
{
  let regExp = /^[A-Za-z]+$/;
  
  return validationTest(value, regExp);
}
};
