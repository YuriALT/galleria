function checkStatus(numberOfPictures) {
    const stockStatus = '';
    if (numberOfPictures <= 0 || typeof (numberOfPictures) === 'string') {
        stockStatus = 'Not Avalible';
    }
    return stockStatus;
}


class picture {

    constructor(picturePrice, pictureName, artistName, pictureImage, pictureQuantity) {
        this.price = picturePrice;
        this.pName = pictureName;
        this.aName = artistName;
        this.image = pictureImage;
        this.status = pictureQuantity;
    }

    getPrice() {
        return `$${this.price}`;
    }

    getPicName() {
        return `${this.pName}`;
    }

    getArtistName() {
        return `${this.aName}`;
    }

    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
        return `${IMG_PATH}${this.image}`;
    }

    getStatus() {
        const picStatus = checkStatus(this.status);
        return `${picStatus}`;
    }

}

const pictures = [

    new picture(
        200,
        'A Great Picture',
        'Bruno Bravo',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        5,
    ),
    new picture(
        360,
        'Another Picture',
        'Bruno Bravo',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        10,
    ),
    new picture(
        295,
        'Morning good',
        'Carla Uno',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        9,
    ),
    new picture(
        522,
        'Old Picture',
        'Kamilla Hart',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        0,
    ),
];

export {
    pictures
}