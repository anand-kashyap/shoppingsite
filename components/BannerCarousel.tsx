import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { getBanners } from 'utils/api';

interface IBanner {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

const StyledCarousel = styled.div`
  margin-top: 1rem;
  position: relative;

  .carousel .control-dots .dot {
    background: #808080;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1rem;
    background: radial-gradient(farthest-corner at 50% 0px, grey 0%, transparent 50%);
    width: 100%;
    height: 1rem;
  }
`;

interface IArrow {
  prev?: boolean;
}

const StyledArrow = styled.button.attrs<IArrow>(({ prev = false }) => ({
  prev,
  type: 'button',
}))<IArrow>`
  ${props => (props.prev ? 'left: 0;' : 'right: 0;')}
  background: rgba(0,0,0,0.3);
  top: 40%;
  color: #fff;
  margin-top: 0;
  padding: 10px;
  transition: all 0.25s ease-in;
  position: absolute;
  z-index: 2;
  border: none;
  cursor: pointer;
`;

const BannerCarousel = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    getBanners().then(({ data }) => setBanners(data.filter(b => b.isActive)));
  }, []);

  return (
    <StyledCarousel>
      <Carousel
        autoPlay={false}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows
        labels={{
          leftArrow: 'Previous',
          rightArrow: 'Next',
          item: 'Sale',
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <StyledArrow onClick={onClickHandler} prev title={label}>
              PREV
            </StyledArrow>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <StyledArrow onClick={onClickHandler} title={label}>
              NEXT
            </StyledArrow>
          )
        }
      >
        {banners.map(banner => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </StyledCarousel>
  );
};

export default BannerCarousel;
