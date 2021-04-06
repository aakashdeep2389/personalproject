// vertical slider 

import React from 'react'
import ImageGallery from 'react-image-gallery';
import ReactBnbGallery from 'react-bnb-gallery'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: `https://picsum.photos/id/1018/1000/600/`,
        caption: "Viñales, Pinar del Río, Cuba",
        subcaption: "Photo by Simon Matzinger on Unsplash",
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        caption: "Viñales, Pinar del Río, Cuba",
        subcaption: "Photo by Simon Matzinger on Unsplash",
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

// const photos = [{
//     photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
//     caption: "Viñales, Pinar del Río, Cuba",
//     subcaption: "Photo by Simon Matzinger on Unsplash",
//     thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
// }, {
//     photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
//     caption: "La Habana, Cuba",
//     subcaption: "Photo by Gerardo Sanchez on Unsplash",
//     thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
// }, {
//     photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
//     caption: "Woman smoking a tobacco",
//     subcaption: "Photo by Hannah Cauhepe on Unsplash",
//     thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
// }];


class VerticalSlider extends React.Component {
    constructor(props) {
        super(...arguments);
        // this.toggleGallery = this.toggleGallery.bind(this);

        this.state = {
            showIndex: false,
            showBullets: true,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'left',
            showVideo: {},
            galleryOpened: true
        }
    }
    // toggleGallery() {
    //     this.setState(prevState => ({
    //         galleryOpened: !prevState.galleryOpened
    //     }));
    // }

    render() {
        return <div className="body-container-wrapper bg-light">
            <ImageGallery items={images} thumbnailPosition={this.state.thumbnailPosition} />



            {/* <button onClick={this.toggleGallery}>Open photo gallery</button>
            <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={photos}
                onClose={this.toggleGallery} /> */}
        </div>
    }
}

export default VerticalSlider
