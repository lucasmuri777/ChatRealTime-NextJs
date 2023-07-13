import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    box-shadow: 0px 0px 20px black;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 18px;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h1`
    color: white;
`
export const Infos = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    button{
        outline: 0;
        border: 1px solid #fafafa;
        background-color: transparent;
        border-radius: 10px;
        padding: 14px 24px;
        cursor: pointer;
        color: #fafafa;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img{
            height: 35px;
            width: 35px;
            object-fit: contain;
            margin-left: 10px;
        }
    }
`