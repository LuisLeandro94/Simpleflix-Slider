import React, { useState } from 'react';
import { NextButton, PrevButton } from './buttons';
import SliderItem from './slider-item';
import { Container, Wrapper } from './styles';

const Slider = ({ slidesToShow, slides }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;

    const index = resetToVeryBack ? slides.length - 1 : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIndex === slides.length - 1;

    const index = resetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const activeImageSourcesFromState = slides.slice(
    currentImageIndex,
    currentImageIndex + slidesToShow
  );

  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < slidesToShow
      ? [
          ...activeImageSourcesFromState,
          ...slides.slice(0, slidesToShow - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <Wrapper>
      <Container>
        {imageSourcesToDisplay.map((item, index) => (
          <SliderItem key={index} item={item} />
        ))}
      </Container>
      <PrevButton prevSlide={prevSlide} />
      <NextButton nextSlide={nextSlide} />
    </Wrapper>
  );
};

export default Slider;
