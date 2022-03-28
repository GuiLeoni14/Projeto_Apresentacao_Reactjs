import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    .swiper-pagination-bullet {
        background-color: #f15b4a !important;
    }
    .swiper-button-prev,
    .swiper-button-next {
        color: #fff !important;
        @media (max-width: 600px) {
            display: none;
        }
    }
`;
export const SlideContent = styled.div`
    width: 100%;
    padding: 4rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 50%;
    > img {
        width: 40rem;
        height: 20rem;
    }
`;
