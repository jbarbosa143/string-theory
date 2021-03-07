/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  var newStr = "";
  for(i =0; i < str.length; i++){
    newStr = newStr.concat('x');
  }
  return newStr;
}
// =========================
function yellingChars(str){
  var newStr = "";
  // create a loop
  for(i = 0; i < str.length; i++){
    // now for ea letter in the string add !
    newStr += str[i] + "!";
  }
  return newStr;
}
// =========================
function indexedChars(str){
  newStr= "";
  for(i = 0; i < str.length; i++){
    newStr += i + str[i];
  }
  return newStr;
}
// ==========================
function numberedChars(str){
  newStr= "";
  for(i =0; i < str.length; i++){
    newStr += `(${i +1})` + str[i];
  }
  return newStr;
}
// ===========================
function exclaim(str){
  var newStr = "";
  for(i =0; i < str.length; i++){
    if(str[i] === "?"  || str[i] === "."){
      newStr += "!";
    }else{
      newStr += str[i];
    }
  }
  return newStr;
}
// ===============================
function repeatIt(str,num){
  var newStr = "";
  for(i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}
// ==============================
function truncate(str){
  newStr = "";
  if(str.length > 18){
    for(i = 0; i < 15; i++){
      newStr+= str[i];
    }
    newStr;
    newStr +="...";
    return newStr;
  }else{
    return str;
  }
}
// =============================
function ciEmailify(str){
  var email = "";
  for(i = 0; i < str.length; i++){
    if(str[i] === " "){
      email += ".";
    }else{
      email += str[i];    }
  }
  return email.toLowerCase() + "@codeimmersives.com";
} 
// =============================
function reverse(str){
  reStr ="";
  for(i = str.length - 1; i >= 0;i--){
    reStr += str[i];
  }
  return reStr;
}
// =========================
function onlyVowels(str){
  var count = "";
  for(i =0; i < str.length; i++){
    if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
      count += str[i];
    }
  }
  return count;
}
// =========================
// function crazyCase(str){
// var czyStr ="";
// var count = 0;
// for(i = 0; i < str.length; i++);
// if(str[i] !== " "){
//   if(count % 2 === 0){

//   }
// }
// }

// ========================
function titleCase(str){
  newStr = "";
  for(i = 0; i<str.length; i++){
    if(i ===0 || str[i - 1] === " " && i >= 1){
      newStr += str[i].toUpperCase();
    }else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

// ==============================
function camelCase(str){
  var cam1 ="";
  var cam2 = "";
  for(i = 0; i < str.length; i ++){
    if(str[i-1] === " " && i > 1){
      cam1 += str[i].toUpperCase();
    }else{
      cam1 += str[i].toLowerCase();
    }
  }
  for(letter of cam1){
    if(letter !==" "){
      cam2 += letter;
    }
  }
  return cam2;
}
// ===========================
function crazyCase2ReturnOfCrazyCase(str){
  var crzyStr = "";
  var count = 0;
  for(i =0; i < str.length; i++){
    if(str[i] !== " "){
      if(count % 2 === 0){
        crzyStr += str[i].toLowerCase();
        count += 1;
      }else{
        crzyStr += str[i].toUpperCase();
        count += 1;
      }
    }else{
      crzyStr += ' ';
    }
  }
  return crzyStr;
}
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
