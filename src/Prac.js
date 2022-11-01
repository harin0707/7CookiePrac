import React, {useState} from 'react'
import styled from 'styled-components'
import base from './img/base.png'
import cloth01 from './img/cloth01.png'
import cloth02 from './img/cloth02.png'
//img -> json으로 정리

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

display: flex;
align-items: center;
justify-content: center;
`

const ModalContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Modal = ({visible, close}) => {

    return(
        <>
        {visible===true ? 
            <>
            <ModalContainer>
                <OpenModal> 열린 모달창 </OpenModal>
            </ModalContainer>
            </>
        
        : null}
        </>

    )


}

const Prac = () => {

    //아이템 선택 모달창
    const [showModal, setModal] = useState(false);
    const openModal = () =>{
        setModal(!showModal);
    }

    const closeModal = () =>{
        setModal(false);
    }

    return (
        <>
        <Container>
            <Space>옷입히기 공간</Space>
            <img src={base} alt='base'></img>
        </Container>

        <ButContainer>
            <Button type='top' onClick={openModal}> 상의 </Button>
            <Button type='bottom' onClick={openModal}> 하의 </Button>
            <Button type='shoe' onClick={openModal}> 신발 </Button>
        </ButContainer>

        <Modal visible={showModal} close={closeModal}/>
    
        
        </>
        
    )
}

export default Prac