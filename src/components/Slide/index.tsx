import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Container, SlideContent, TextSlide } from './styles';
import { Autoplay, Navigation, Pagination } from 'swiper';
function Slide() {
    function getImageUrl(name: string): string {
        return new URL(`../../assets/img/js-${name}`, import.meta.url).href;
    }
    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                pagination={{ clickable: true }}
                data-aos="zoom-in-down"
            >
                <SwiperSlide>
                    <SlideContent>
                        <TextSlide>
                            <img src={getImageUrl('1.png')} alt="" />
                        </TextSlide>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <TextSlide>
                            <img src={getImageUrl('2.jpeg')} alt="" />
                        </TextSlide>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <TextSlide>
                            <img src={getImageUrl('3.jpg')} alt="" />
                        </TextSlide>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <TextSlide>
                            <img src={getImageUrl('4.png')} alt="" />
                        </TextSlide>
                    </SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>
                        <TextSlide>
                            <img src={getImageUrl('6.png')} alt="" />
                        </TextSlide>
                    </SlideContent>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default Slide;
