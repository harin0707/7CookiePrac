import {atom, selector } from 'recoil'
import cloth01 from './img/cloth_01.png'
import eyes01 from './img/eyes_01.png'

    //Recoil 사용해보기
export const itemTopOn = atom({
        key: 'itemImage',
        default: {
            //deault 이미지 첨부
            'topItem' : cloth01,
            'eyesItem' : eyes01,
        }
    })

export const itemEyesOn = atom({
        key: 'eyesImage',
        default: {
            //deault 이미지 첨부
            'eyesItem' : eyes01,
        }
    })

// export const getItemImage = selector({
//         key: "get/itemImage",
//         get: async ({get}) => {
//             const {topItem} = get(itemTopOn);
//             const imageSrc = {topItem};
//             try {
//                 const res = await fetch(imageSrc);
//                 return res;
//             } catch(err) {
//                 throw Error("err");
//             }
//         }
    
//     })