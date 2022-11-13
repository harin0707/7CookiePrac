import {atom} from 'recoil'
import cloth01 from './img/cloth_01.png'
import eyes01 from './img/eyes_01.png'
import n_base from './img/투명.png'

    //Recoil 사용해보기
export const itemTopOn = atom({
        key: 'itemImage',
        default: {
            //deault 이미지 첨부
            'topItem' : cloth01,
        }
    })

export const itemEyesOn = atom({
        key: 'eyesImage',
        default: {
            //deault 이미지 첨부
            'eyesItem' : eyes01,
            
        }
    })


//눈사람 이미지
export const baseEyes = atom({
    key: 'baseSnowman_e',
    default: [
        {'Eyes' : n_base,
        'EyesVal' : 'eyes_0'}
    ]
})

export const baseNose = atom({
    key: 'baseSnowman_n',
    default: [
        {'Nose' : n_base,
        'NoseVal' :'nose_0'}
    ]
})

export const baseArms = atom({
    key: 'baseSnowman_a',
    default: [
        {'Arms' : n_base,
        'ArmsVal' :'arms_0'}
    ]
})

export const baseItem = atom({
    key: 'baseSnowman_i',
    default: [
        {'Item' : n_base,
        'ItemVal' :'item_0'}
    ]
})

export const baseHead = atom({
    key: 'baseSnowman_h',
    default: [
        {'Head' : n_base,
        'HeadVal' :'head_0'}
    ]
})

export const baseMouth = atom({
    key: 'baseSnowman_m',
    default: [
        {'Mouth' : n_base,
        'MouthVal' :'mouth_0'}
    ]
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