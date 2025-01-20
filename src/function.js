import odinImage from "./meat.jpg"
import homeImage from "./images.jpg"
const main =function (){
    const main =document.getElementById('content');
    const title = document.createElement('div');
    const image = document.createElement('img');
    const text =document.createElement('div');
    

    main.append(title,text,image)
    
    title.innerText='KENYA HOTEL';
    text.innerText='where comfort ,food and serenity meet hospitality.'
    image.src=homeImage;
    
  
    return{main,title,image,text};
};
const menu =function (){
    const main =document.getElementById('content');
    const title = document.createElement('div');
    const text =document.createElement('div');
    const image = document.createElement('img');
    
    main.append(title,text,image)
    
    title.innerText='We offer a wide range of food';
    text.innerText='specially prepared by professional chefs for you'
    image.src=odinImage;
  
    return{main,title,text,image};
};

const about =function (){
    const main =document.getElementById('content');
    const title = document.createElement('div');
    const text =document.createElement('div');
    const image = document.createElement('img');
    
    main.append(title,text,image)
    
    title.innerText='Making the best meals since 1976';
    text.innerText='Contact us :0715628681'
    image.src=odinImage;
  
    return{main,title,text,image};
};
export{main,menu,about}