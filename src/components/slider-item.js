import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
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
  const [isPlaying, setPlaying] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const togglePlaying = () => setPlaying(!isPlaying);

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
        <ReactPlayer
          url={item?.trailer?.embed_url}
          width={'100%'}
          height={'100%'}
          muted
          playing={isPlaying}
          loop
          onMouseEnter={togglePlaying}
          onMouseLeave={togglePlaying}
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
