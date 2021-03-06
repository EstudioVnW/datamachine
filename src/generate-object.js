var ValueGenerator = require('./value-generator');

function gerarObjeto(objeto){

  var result = {};  
  
  if(typeof objeto != 'object') return false;

  Object.keys(objeto).forEach(item => { 
    if(typeof objeto[item] == 'object'){ 
      result[item] = gerarObjeto(objeto[item]); // recursividade 
    }else{
      result[item] = ValueGenerator.make(objeto[item]);
    }
  });

  return result;
}

module.exports = gerarObjeto;
