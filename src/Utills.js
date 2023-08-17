export default function getRandomChar(min,max){
    const Limit= max-min+1 ;
    return String.fromCharCode(Math.floor(Math.random()
    *Limit) +min);
} 

export function getSpecialChar(){
    const SpecialChar ="!/#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
    return SpecialChar[Math.floor(Math.random() *SpecialChar.length)]
}

