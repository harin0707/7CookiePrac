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
    default: {
        'baseEyes' : n_base,
    }
})

export const baseNose = atom({
    key: 'baseSnowman_n',
    default: {
        'baseNose' : n_base,
    }
})

export const baseArms = atom({
    key: 'baseSnowman_a',
    default: {
        'baseArms' : n_base,
    }
})

export const baseItem = atom({
    key: 'baseSnowman_i',
    default: {
        'baseItem' : n_base,
    }
})

export const baseHead = atom({
    key: 'baseSnowman_h',
    default: {
        'baseHead' : n_base,
    }
})

export const baseMouth = atom({
    key: 'baseSnowman_m',
    default: {
        'baseMouth' : n_base,
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