import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from './recoil'

import baseSnowman from './img/민둥눈사람.png'
import eyes01 from './img/눈1.png'
import eyes02 from './img/눈2.png'
import arms01 from './img/팔1.png'
import arms02 from './img/팔2.png'
import item01 from './img/소품1.png'
import item02 from './img/소품2.png'
import nose01 from './img/코1.png'
import nose02 from './img/코2.png'
import head01 from './img/머리1.png'
import head02 from './img/머리2.png'
import mouth01 from './img/입1.png'
import mouth02 from './img/입2.png'


const Modal = ({showModal, modalType}) =>{
    // const [topR, setTopR] = useRecoilState(itemTopOn);
    const [eyes, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arms, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    //1. 눈
    const handleChangeEyes = (e) => {
        const Eyes = e.currentTarget.getAttribute('src');
        const EyesVal = e.currentTarget.getAttribute('value');
        const Array = [{Eyes, EyesVal}];
        
        setEyes(Array);
    }
    // console.log(eyes);
    // console.log(modalType)
    

    //2. 코
    const handleChangeNose = (e) => {
        const Nose = e.currentTarget.getAttribute('src');
        const NoseVal = e.currentTarget.getAttribute('value');
        const Array = [{Nose, NoseVal}];
        setNose(Array);
    }


    //3. 팔
    const handleChangeArms = (e) => {
        const Arms = e.currentTarget.getAttribute('src');
        const ArmsVal = e.currentTarget.getAttribute('value');
        const Array = [{Arms, ArmsVal}];
        setArms(Array);
    }

    //4. 입
    const handleChangeMouth = (e) => {
        const Mouth = e.currentTarget.getAttribute('src');
        const MouthVal = e.currentTarget.getAttribute('value');
        const Array = [{Mouth, MouthVal}];
        setMouth(Array);
    }

    //5. 소품
    const handleChangeItem = (e) => {
        const Item = e.currentTarget.getAttribute('src');
        const ItemVal = e.currentTarget.getAttribute('value');
        const Array = [{Item, ItemVal}];
        setItem(Array);
    }

    //6. 머리
    const handleChangeHead = (e) => {
        const Head = e.currentTarget.getAttribute('src');
        const HeadVal = e.currentTarget.getAttribute('value');
        const Array = [{Head, HeadVal}];
        setHead(Array);
    }


    switch (modalType){
        case 'eyes' :
        return(
            <>
                    {showModal===true ? 
                <>

                        <ModalContainer>
                            <OpenModal> 
                                <Item src={eyes01} alt='눈1' value='eyes_01' onClick={handleChangeEyes} ></Item>
                                <Item src={eyes02} alt='눈2' value='eyes_02' onClick={handleChangeEyes} ></Item>
                            </OpenModal> 
    
                        </ModalContainer>
                        </>: null }</>
            )

        case 'nose' :
            return(
                <>
                    {showModal===true ? 
                    <>
                            <ModalContainer>
                                <OpenModal> 
                                    <Item src={nose01} alt='코1' value='nose_01' onClick={handleChangeNose} ></Item>
                                    <Item src={nose02} alt='코2' value='nose_02' onClick={handleChangeNose} ></Item>
                                </OpenModal> 
        
                            </ModalContainer>
                            </>:null}</>
        )
        case 'head' :
            return(
                    <>
                    {showModal===true ? 
                            <>
                            <ModalContainer>
                                <OpenModal> 
                                    <Item src={head01} alt='머리1' value='head_01' onClick={handleChangeHead} ></Item>
                                    <Item src={head02} alt='머리2' value='head_02' onClick={handleChangeHead} ></Item>
                                </OpenModal> 
        
                            </ModalContainer>
                            </>
                        : null}
                        </>)
        case 'item' :
            return(
                    <>
                    {showModal===true ? 
                            <>
                            <ModalContainer>
                                <OpenModal> 
                                    <Item src={item01} alt='소품1' value='item_01' onClick={handleChangeItem} ></Item>
                                    <Item src={item02} alt='소품2' value='item_02' onClick={handleChangeItem} ></Item>
                                </OpenModal> 
        
                            </ModalContainer>
                            </>
                        : null}
                        </>)
        case 'arms' :
            return(
                    <>
                    {showModal===true ? 
                            <>
                            <ModalContainer>
                                <OpenModal> 
                                    <Item src={arms01} alt='팔1' value='arms_01' onClick={handleChangeArms} ></Item>
                                    <Item src={arms02} alt='팔2' value='arms_02' onClick={handleChangeArms} ></Item>
                                </OpenModal> 
        
                            </ModalContainer>
                            </>
                        : null}
                        </>)
        case 'mouth' :
            return(
                    <>
                    {showModal===true ? 
                            <>
                            <ModalContainer>
                                <OpenModal> 
                                    <Item src={mouth01} alt='입1' value='mouth_01'  onClick={handleChangeMouth} ></Item>
                                    <Item src={mouth02} alt='입2' value='mouth_02' onClick={handleChangeMouth} ></Item>
                                </OpenModal> 
        
                            </ModalContainer>
                            </>
                        : null}
                        </>)
        default : return (null)
        


    }


}

const Prac = () => {
    //아이템 선택 모달창
    const [showModal, setModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (e) =>{
        setModal(!showModal);
        setModalType(e.currentTarget.getAttribute('type'));

    }
    // console.log(modalType)

    const closeModal = () =>{
        setModal(false);
    }

    //선택한 아이템 이미지 속성 전달해주는 useState
    // const [top, setTop] = useState('');
    // const [itemVisible, setItemVisible] = useState(false);

    // const ItemOn =(e) => {
    //     setItemVisible(true);
    //     setTop(e.currentTarget.getAttribute('src'))
    // }
    // console.log(top)

    //RecoilState 선언하기
    //아이템 사진을 눌렀을 때 해당하는 아이템 이미지 값으로 데이터 변경
    const [eyes, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arms, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);


    //localStorage 실습
    const [ls, setLS] = useState(
        ()=>
        [
            JSON.parse(localStorage.getItem('eyes')),
            JSON.parse(localStorage.getItem('nose')),
            JSON.parse(localStorage.getItem('head')),
            JSON.parse(localStorage.getItem('arms')),
            JSON.parse(localStorage.getItem('mouth')),
            JSON.parse(localStorage.getItem('item'))] || 
        [
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
        ]
    )

    // useEffect = (()=>{
        localStorage.setItem('eyes', JSON.stringify(ls[0]))
        localStorage.setItem('nose', JSON.stringify(ls[1]))
        localStorage.setItem('head', JSON.stringify(ls[2]))
        localStorage.setItem('arms', JSON.stringify(ls[3]))
        localStorage.setItem('mouth', JSON.stringify(ls[4]))
        localStorage.setItem('item', JSON.stringify(ls[5]))
    // }, [ls])



    const saveToLS = () =>{
        //save 버튼 한 번 더 눌렀을 때 되돌리는 기능 없애기
        setLS([
            eyes[0].Eyes, 
            nose[0].Nose, 
            head[0].Head, 
            arms[0].Arms, 
            mouth[0].Mouth, 
            item[0].Item
        ])}

    const deleteLS = () =>{
        localStorage.removeItem('eyes')
        localStorage.removeItem('head')
        localStorage.removeItem('nose')
        localStorage.removeItem('arms')
        localStorage.removeItem('item')
        localStorage.removeItem('mouth')

        setLS([
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
            baseSnowman,
        ])
            
    }
    

    return (
        <>
        <Container>
            <Space>옷입히기 공간</Space>

            <ImgContainer>
                <ImgCont>
                    <BaseImg src={baseSnowman} alt='base'></BaseImg>
                </ImgCont>

                {/* <TopImg src={topR.topItem} alt='상의'  ></TopImg> */}
                <Eyes src={eyes[0].Eyes} alt='눈'  ></Eyes>
                <Nose src={nose[0].Nose} alt='코'  ></Nose>
                <Head src={head[0].Head} alt='머리'  ></Head>
                <Arms src={arms[0].Arms} alt='팔'  ></Arms>
                <Mouth src={mouth[0].Mouth} alt='입'  ></Mouth>
                <ItemS src={item[0].Item} alt='소품'  ></ItemS>
                
    
            </ImgContainer>
            
        

        <ButContainer>
            {/* <Button type='top' onClick={openModal} modal='top'> 상의 </Button> */}
            <Button type='eyes' onClick={openModal} modal='eyes'> 눈 </Button>
            <Button type='nose' onClick={openModal} modal='nose'> 코 </Button>
            <Button type='arms' onClick={openModal} modal='arms'> 팔 </Button>
            <Button type='item' onClick={openModal} modal='item'> 소품 </Button>
            <Button type='head' onClick={openModal} modal='head'> 머리 </Button>
            <Button type='mouth' onClick={openModal} modal='mouth'> 입 </Button>


        </ButContainer>

        <Modal showModal={showModal} modalType={modalType}/>
        <SaveButton onClick={saveToLS}> save </SaveButton>
        <Button onClick={deleteLS}> delete </Button>


        {/* localStorage 실습 */}
        <ImgContainer>
                <ImgCont>
                    <BaseImg src={baseSnowman} alt='base'></BaseImg>
                </ImgCont>

                <Eyes src={ls[0]} alt='눈'  ></Eyes>
                <Nose src={ls[1]} alt='코'  ></Nose>
                <Head src={ls[2]} alt='머리'  ></Head>
                <Arms src={ls[3]} alt='팔'  ></Arms>
                <Mouth src={ls[4]} alt='입'  ></Mouth>
                <ItemS src={ls[5]} alt='소품'  ></ItemS>

            </ImgContainer>


        </Container>


        
    </>)}


export default Prac

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: black solid;

max-width: 28.125rem; 
min-width: 6.25rem;

height: auto;
margin : 0 auto;
position: relative;
`
const Space = styled.div`
text-align: center;
`

const Button = styled.button`
`

const ButContainer = styled.div`
display: flex;
justify-content: center;
`

const OpenModal = styled.div`
border: solid 0.1vw black;
/* width: 50vw;
height: 50vw; */
text-align: center;

flex-wrap : wrap;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ModalContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;

border: solid 1vw purple;
display: flex;
flex-direction: column;
`

const Item = styled.img`
border: solid black 0.1vw;

width: 50%;
height: 50%;
`

const ImgContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;

border: solid green;
overflow: hidden;
position: relative;

/* width: 100vw;
height: 100vw; */
`

const ImgCont = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border: solid 1vw red;
`

const BaseImg = styled.img`
border: solid black;
z-index: 0;

width: 30%;
height: auto;
`

const Eyes = styled.img`
border: solid black;
z-index: 1;
border: yellow solid 1vw;

width: 30%;
height: auto;
`

const Nose = styled.img`
border: blue solid 2vw;
position: absolute;

width: 30%;
height: auto;
`

const Head = styled.img`
border: blue solid 2vw;
position: absolute;

width: 30%;
height: auto;
`

const ItemS = styled.img`
border: blue solid 2vw;
position: absolute;

width: 30%;
height: auto;
`

const Arms = styled.img`
border: blue solid 2vw;
position: absolute;

width: 30%;
height: auto;
`

const Mouth = styled.img`
border: blue solid 2vw;
position: absolute;

width: 30%;
height: auto;
`



const SaveButton = styled.button`
`

const LS = styled.img`
position: absolute;

width: 30%;
height: auto;
`