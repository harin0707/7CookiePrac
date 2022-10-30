import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
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


const Prac = () => {
    return (
        <>
        <Container>
            <Space>옷입히기 공간</Space>
        </Container>

        <ButContainer>
            <Button type='top'> 상의 </Button>
            <Button type='bottom'> 하의 </Button>
            <Button type='shoe'> 신발 </Button>
        </ButContainer>
        
        </>
        
    )
}

export default Prac