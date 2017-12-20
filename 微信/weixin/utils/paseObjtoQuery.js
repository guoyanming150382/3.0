const parseObjQurey=function(obj){
  let str="";
  for(let key in obj){
    str+=key+"="+obj[key]+"&";
  }
  return str.substr(0,str.length-1);
}

module.exports=parseObjQurey;