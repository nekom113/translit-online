"use strict"
 const inputIn = document.querySelector('.input1');
 const button = document.querySelector('.input2');
 const kirBlock = document.querySelector('.block__element_1');
 const latBlock = document.querySelector('.block__element_2');
 const translator = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
  'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j',
  'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
  'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
  'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
  'щ': 'shch', 'ь': '`','ы': 'y', 'ъ': '`', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E',
  'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
  'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
  'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '`',
  'Ы': 'Y', 'Ъ': '`', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
 };

 button.addEventListener('click', getClick);
 function getClick() {
   
   let newBlockKir = document.createElement('div');
   newBlockKir.className = 'kir_word';
   
   newBlockKir.innerText = inputIn.value
   newBlockKir.setAttribute('span', `${newBlockKir.innerHTML}`);
   
   kirBlock.appendChild(newBlockKir);
   
   let newBlockLat = document.createElement('div');
   newBlockLat.className = 'lat_word';
   newBlockLat.innerText = getTranslit (newBlockKir.innerText);
   newBlockLat.setAttribute('text',`${newBlockLat.innerHTML}`);
   latBlock.appendChild(newBlockLat);
   }

   function getTranslit (str) {
     let newWord = '';
     
  for(let i = 0; i < str.length; i++) {
       if (translator[str[i]] != undefined){
         newWord += translator[str[i]];
         } else {
         newWord += str[i];
      }
    } 
     return newWord;
  }
