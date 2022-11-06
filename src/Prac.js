import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import base from './img/base.png'
import cloth01 from './img/cloth_01.png'
import cloth02 from './img/cloth_02.png'
import eyes01 from './img/eyes_01.png'
import eyes02 from './img/eyes_02.png'
import hair01 from './img/hair_01.png'
import {useRecoilState} from 'recoil'
import {itemImageOn} from './recoil'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: black solid;
height: 30vw;
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
width: 50vw;
height: 50vw;
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
`

const ImgContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;

border: solid green;
overflow: hidden;
position: relative;
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
`

const TopImg = styled.img`
border: solid black;
z-index: 1;
border: yellow solid 1vw;
`
const Eyes = styled.img`
border: blue solid 2vw;
position: absolute;
`

const Hair = styled.img`
border: blue solid 2vw;
position: absolute;
`

const SaveButton = styled.button`
`

const Modal = ({showModal, modalType}) =>{
    const [topR, setTopR] = useRecoilState(itemImageOn);

    const handleChangeItem = (e) => {
        const topItem = e.currentTarget.getAttribute('src');
        const Image = {topItem};
        setTopR(Image);

    }
    console.log(modalType)
    // console.log(topR.topItem);

    switch (modalType){
        case 'top' :
            return(
                <>
                {showModal===true ? 
                        <>
                        <ModalContainer>
                            <OpenModal> 
                                <Item src={cloth01} alt='상의1' value='cloth_01' onClick={handleChangeItem} ></Item>
                                <Item src={cloth02} alt='상의2' value='cloth_02' onClick={handleChangeItem} ></Item>
                            </OpenModal>
                            <SaveButton> save </SaveButton>
                        </ModalContainer>
                        </>
                    : null}
                    </>)
        case 'eyes' :
        return(
                <>
                {showModal===true ? 
                        <>
                        <ModalContainer>
                            <OpenModal> 
                                <Item src={eyes01} alt='눈1' value='eyes_01' onClick={handleChangeItem} ></Item>
                                <Item src={eyes02} alt='눈2' value='eyes_02' onClick={handleChangeItem} ></Item>
                            </OpenModal> 
                            <SaveButton> save </SaveButton>
                        </ModalContainer>
                        </>
                    : null}
                    </>
            )
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
    const [topR, setTopR] = useRecoilState(itemImageOn);


    return (
        <>
        <Container>
            <Space>옷입히기 공간</Space>

            <ImgContainer>
                <ImgCont>
                    <BaseImg src={base} alt='base'></BaseImg>
                </ImgCont>

                <TopImg src={topR.topItem} alt='상의' visible={itemVisible}></TopImg>
                <Eyes src={eyes01} alt='눈' visible={itemVisible}></Eyes>
                <Hair src={hair01} alt='머리' visible={itemVisible}></Hair>
    
            </ImgContainer>
            
        </Container>

        <ButContainer>
            <Button type='top' onClick={openModal} modal='top'> 상의 </Button>
            <Button type='eyes' onClick={openModal} modal='eyes'> 눈 </Button>
            <Button type='shoe' onClick={openModal}> 신발 </Button>
        </ButContainer>

        <Modal showModal={showModal} close={closeModal} modalType={modalType}/>

            {/* {showModal===true ? 
                <>
                <ModalContainer>

                    if ({modalType} === 'top'){
                        <OpenModal> 
                        <Item src={cloth01} alt='상의1' value='cloth_01' onClick={handleChangeItem} ></Item>
                        <Item src={cloth02} alt='상의2' value='cloth_02' onClick={handleChangeItem} ></Item>
                        </OpenModal>

                    }
                    else if ({modalType} === 'eyes'){
                        <OpenModal> 
                        <Item src={eyes01} alt='눈1' value='eyes_01' onClick={handleChangeItem} ></Item>
                        <Item src={eyes02} alt='눈2' value='eyes_02' onClick={handleChangeItem} ></Item>
                        </OpenModal> 

                    }

                    <SaveButton> save </SaveButton>
                    
                </ModalContainer>
                </>
            : null} */}
        </>
        
    )
}

export default Prac