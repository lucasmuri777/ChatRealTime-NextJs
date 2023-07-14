import styled from 'styled-components'

interface MensagemSingleProps {
    BackColor: string;
  }

export const Container = styled.div`
    height: calc(100vh - 90px);
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
`
export const Content = styled.div`
    height: 100%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Chat = styled.div`
    height: 90%;
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    gap: 10px;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
`
export const MensagemSingle = styled.div<MensagemSingleProps>`
    padding: 10px;
    background-color: ${props => props.BackColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 15px;

    img{
        width: 50px;
        height: 50px;
        max-width: 50px;
        max-height: 50px;
        border-radius: 50px;
        object-position: center;
        object-fit: cover;
    }
    div{
        display: flex;
        justify-content: left;
        flex-direction: column;
        padding-right: 10px;
        max-width: calc(100% - 50px);
        p{
            font-size: 20px;
            line-height: 150%;
            white-space: pre-wrap;
            max-width: 100%;
        }
        label{
            font-weight: bold;
        }
    }
    
`

export const InputContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        color: #ebebeb;
    }
`
export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    gap: 10px;

    input{
        width: 80%;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 20px;
        padding: 0 10px;
        background-color: #e6e6e6;
    }
    button{
        width: 20%;
        background-color: #0f0f0f;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 20px;
        padding: 0 10px;
        color: #e6e6e6;
        border: 1px solid #e6e6e6;
        cursor: pointer;
    }
`
