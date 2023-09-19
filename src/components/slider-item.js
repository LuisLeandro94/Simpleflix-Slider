import React, { useState } from 'react';
import {
  Episodes,
  Info,
  ItemContainer,
  ItemDataContainer,
  ItemImage,
  ItemVideo,
  Rating,
  Score,
} from './styles';

const SliderItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <ItemContainer
      id='image'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <ItemImage
        src={item?.images?.jpg?.large_image_url}
        className={
          hovered && item?.trailer?.embed_url ? 'imgHover' : 'notHover'
        }></ItemImage>
      <ItemVideo
        className={hovered && item?.trailer?.embed_url ? 'hovered' : ''}>
        <iframe
          src={item?.trailer?.embed_url}
          title={item?.title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop'
        />
      </ItemVideo>
      <ItemDataContainer>
        {item?.title}
        <Info>
          <Score>{item?.score}/10</Score>
          <Rating>{item?.rating?.replace(/\D/g, '').slice(0, 2)}+</Rating>
          <Episodes>{item?.episodes} eps.</Episodes>
        </Info>
      </ItemDataContainer>
    </ItemContainer>
  );
};

export default SliderItem;
