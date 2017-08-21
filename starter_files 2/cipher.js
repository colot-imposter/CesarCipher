const aol = 'abcdefghijklmnopqrstuvwxyz'
// let word = ''


function encipher(p, shift) {
  let newJ=""
//go through each letter of the word
  for (var i = 0; i < p.length; i++) {
//go through each letter of the alphabet
      for (var j = 0; j < aol.length; j++) {
        //are those letters the same?
        if (p.charAt(i) === aol.charAt(j)){
          //if they are add them to new string
          //if the placement of the letter bigger than 26, minus 26 till it is less than 26
          let Newplacer = j + shift
          if (Newplacer>26){
            while (Newplacer>26){
              Newplacer= Newplacer-26
            }
          }
        newJ += aol.charAt(Newplacer)

  console.log(newJ);
      }


}}
//return new string
return newJ}
encipher('hello', 5)
//-------------------------------------
function decipher(p, shift) {

  let newK=""
//samsies as the encipher but instead of moving positive through the alphabet, move negatively

  shift= shift*-1
  for (var i = 0; i < p.length; i++) {

      for (var j = 0; j < aol.length; j++) {
        if (p.charAt(i) === aol.charAt(j)){
          let Newplacer = j + shift
          if (Newplacer>26){
            while (Newplacer>26){
              Newplacer= Newplacer-26
            }
          }
          //because negative movement is possible, negative values need to be 'scoped'
          if (Newplacer<0){
            while(Newplacer<0){
              Newplacer=Newplacer+26
            }
          }
        newK += aol.charAt(Newplacer)

  console.log(newK);
      }


  }}

  return newK}
  decipher('newJ', 5)



//   let newK=""
//
//   for (var x = 0; x < p.length; x++) {
//
//       for (var y = 0; y < aol.length; y++) {
//         if (p.charAt(x) === aol.charAt(y)){
//           let Realplacer = y - shift
//           if (Realplacer>26){
//             while (Realplacer>26){
//               Realplacer= Realplacer-26
//             }
//           }
//         newJ += aol.charAt(Realplacer)
//
//   console.log(newK);
//       }
//
//
// }}
//
//
// }

module.exports = {
  encipher,
  decipher
}
