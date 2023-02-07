const shuffle = (array) => {
  for(let i = array.length - 1; i>=0; i--){
    const randomIndex = Math.floor(Math.random()*(i+1));

    const randomItem = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = randomItem;
  }
  return array;
}

console.log(shuffle(['curychen(陈伟帆)','jizoupeng(彭坤滨)','joyboyguo(郭文学)','larrylzhang(张友龙)','leahcimsu(蘇信豪)','randysun(孙争)','ricoxiao(肖高兴)','zenlylin(林子扬)']));