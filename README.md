# Simpleflix Slider

A simple animated slider component for React.

## Installation

`
$ npm install simpleflix-slider --save
`

## Usage
All that you need:
```javascript
import data from './Data.json'
import { Slider } from 'simpleflix-slider'

function App() {
    return (
        <Slider slidesToShow={5} slides={data} />
    )
}
```
> SliderContainer.js

```javascript
[
    {
        images: {
            jpg: {
                large_image_url: "https:\/\/cdn.myanimelist.net\/images\/anime\/1208\/94745l.jpg"
            }
        },
        trailer: {
            embed_url: "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1"
        },
        title: "Fullmetal Alchemist: Brotherhood",
        score: 9.06,
        rating: "R - 17+ (violence & profanity)",
        episodes: 64
    }
]
```
> Data.json

## Props

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| slidesToShow | number | true | Number of slides to show in the slider |
| data | array of objects | true | slider data |

## Screenshot 

![Simpleflix-Slider screenshot](./public//screenshot.jpg)

## Disclaimer

This component is not official nor supported by Netflix. The trademark "Netflix" is registered by "Netflix, Inc."

## License 

Apache 2.0