import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width:100vw;
    min-height:100vh;
    padding: 5rem calc((100vw-1300px)/2);
    background:#150f0f;
    color:#fff;
`

export const ProductWrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin:0 auto;
`

export const ProductCard = styled.div`
    width:300px;
    line-height:2;
    margin:0 2rem;
`

export const ProductImg = styled.img`
    min-width:300px;
    height:300px;
    max-width:100%;
    box-shadow: 8px 8px #fdc500;
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align:center;
    margin-bottom:5rem;
    padding-top:40px;

`


export const ProductTitle = styled.h2`
    font-size: 1.5rem
    font-weight:400;

`

export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:2rem;
text-align:center;
`

export const ProductDesc = styled.p`
    margin-bottom:1rem;

`


export const ProductPrice = styled.p`
    margin-bottom:1rem;
    font-size:2rem;

`

export const ProductButton = styled.button`
    margin-bottom:1rem;
    font-size:1rem;
    padding:1rem 4rem;
    border:none;
    background: #e31837;
    color:#fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #ffc500;
        color:#000;
        transition: 0.2s ease-out;
        cursor:pointer;

    }
`