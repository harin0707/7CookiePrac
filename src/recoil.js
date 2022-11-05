import {atom, selector } from 'recoil'
import cloth01 from './img/cloth_01.png'

    //Recoil 사용해보기
export const itemImageOn = atom({
        key: 'itemImage',
        default: {
            //deault 이미지 첨부
            'topItem' : cloth01,
        }
    })

export const getItemImage = selector({
        key: "get/itemImage",
        get: async ({get}) => {
            const {topItem} = get(itemImageOn);
            const imageSrc = {topItem};
            try {
                const res = await fetch(imageSrc);
                return res;
            } catch(err) {
                throw Error("err");
            }
        }
    })