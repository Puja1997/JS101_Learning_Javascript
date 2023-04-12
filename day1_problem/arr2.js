let ch="a";
let low=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let up=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
for(let i=0;i<low.length;i++){
  if(ch==low[i]){
    ch=up[i];
  }
}
console.log(ch);