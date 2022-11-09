import React, {useState} from 'react'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'
import {itemTopOn, itemEyesOn, baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from './recoil'

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

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: black solid;

max-width: 450px;
min-width: 100px;
height: auto;
/* background-color: green; */
margin : 0 auto;
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
        const baseEyes = e.currentTarget.getAttribute('src');
        const Image = {baseEyes};
        setEyes(Image);
    }
    // console.log(modalType)
    // console.log(eyes.baseEyes);

    //2. 코
    const handleChangeNose = (e) => {
        const baseNose = e.currentTarget.getAttribute('src');
        const Image = {baseNose};
        setNose(Image);
    }
    // console.log(Nose.baseNose)

    //3. 팔
    const handleChangeArms = (e) => {
        const baseArms = e.currentTarget.getAttribute('src');
        const Image = {baseArms};
        setArms(Image);
    }

    //4. 입
    const handleChangeMouth = (e) => {
        const baseMouth = e.currentTarget.getAttribute('src');
        const Image = {baseMouth};
        setMouth(Image);
    }

    //5. 소품
    const handleChangeItem = (e) => {
        const baseItem = e.currentTarget.getAttribute('src');
        const Image = {baseItem};
        setItem(Image);
    }

    //6. 머리
    const handleChangeHead = (e) => {
        const baseHead = e.currentTarget.getAttribute('src');
        const Image = {baseHead};
        setHead(Image);
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
                            <SaveButton> save </SaveButton>
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
                                    <Item src={nose01} alt='코1' onClick={handleChangeNose} ></Item>
                                    <Item src={nose02} alt='코2' onClick={handleChangeNose} ></Item>
                                </OpenModal> 
                                <SaveButton> save </SaveButton>
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
                                    <Item src={head01} alt='머리1' onClick={handleChangeHead} ></Item>
                                    <Item src={head02} alt='머리2' onClick={handleChangeHead} ></Item>
                                </OpenModal> 
                                <SaveButton> save </SaveButton>
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
                                    <Item src={item01} alt='소품1' onClick={handleChangeItem} ></Item>
                                    <Item src={item02} alt='소품2' onClick={handleChangeItem} ></Item>
                                </OpenModal> 
                                <SaveButton> save </SaveButton>
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
                                    <Item src={arms01} alt='팔1' onClick={handleChangeArms} ></Item>
                                    <Item src={arms02} alt='팔2' onClick={handleChangeArms} ></Item>
                                </OpenModal> 
                                <SaveButton> save </SaveButton>
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
                                    <Item src={mouth01} alt='입1' onClick={handleChangeMouth} ></Item>
                                    <Item src={mouth02} alt='입2' onClick={handleChangeMouth} ></Item>
                                </OpenModal> 
                                <SaveButton> save </SaveButton>
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
    const [top, setTop] = useState('');
    const [itemVisible, setItemVisible] = useState(false);

    const ItemOn =(e) => {
        setItemVisible(true);
        setTop(e.currentTarget.getAttribute('src'))
    }
    // console.log(top)

    //RecoilState 선언하기
    //아이템 사진을 눌렀을 때 해당하는 아이템 이미지 값으로 데이터 변경
    const [topR, setTopR] = useRecoilState(itemTopOn);
    const [eyesR, setEyesR] = useRecoilState(itemEyesOn);

    const [eyes, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arms, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);



    return (
        <>
        <Container>
            <Space>옷입히기 공간</Space>

            <ImgContainer>
                <ImgCont>
                    <BaseImg src={baseSnowman} alt='base'></BaseImg>
                </ImgCont>

                {/* <TopImg src={topR.topItem} alt='상의' visible={itemVisible} ></TopImg> */}
                <Eyes src={eyes.baseEyes} alt='눈' visible={itemVisible} ></Eyes>
                <Head src={head.baseHead} alt='머리' visible={itemVisible} ></Head>
                <Arms src={arms.baseArms} alt='팔' visible={itemVisible} ></Arms>
                <Mouth src={mouth.baseMouth} alt='입' visible={itemVisible} ></Mouth>
                <ItemS src={item.baseItem} alt='소품' visible={itemVisible} ></ItemS>
                <Nose src={nose.baseNose} alt='코' visible={itemVisible} ></Nose>
    
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

        </Container>


        
    </>)}

export default Prac