let sedanImages = [
    'images/A4-Sedan.jpg',
    'images/A4-Sedan_1.jpg',
    'images/A4-Sedan_2.jpg',
    'images/A4-Sedan_3.jpg',
    'images/A4-Sedan_4.jpg'
];

let avantImages = [
    'images/A4-Avant.jpg',
    'images/A4-Avant_1.jpg',
    'images/A4-Avant_2.jpg',
    'images/A4-Avant_3.jpg',
    'images/A4-Avant_4.jpg',
    'images/A4-Avant_5.jpg'
];

let a5Images = [
    'images/A5-Sportback.jpg',
    'images/A5-Sportback_1.jpg',
    'images/A5-Sportback_2.jpg',
    'images/A5-Sportback_3.jpg',
    'images/A5-Sportback_4.jpg'
];

let q5SuvImages = [
    'images/Q5.jpg',
    'images/Q5_1.jpg',
    'images/Q5_2.jpg',
    'images/Q5_3.jpg',
    'images/Q5_4.jpg'
];

let q5SportbackImages = [
    'images/Q5-Sportback.jpg',
    'images/Q5-Sportback_1.jpg',
    'images/Q5-Sportback_2.jpg',
    'images/Q5-Sportback_3.jpg',
    'images/Q5-Sportback_4.jpg'
];

let ttCoupeImages = [
    'images/TT-Coupe.jpg',
    'images/TT-Coupe_1.png',
    'images/TT-Coupe_2.png',
    'images/TT-Coupe_3.png',
    'images/TT-Coupe_4.jpg'
];

let ttRsCoupeImages = [
    'images/TT-RS-Coupe.jpg',
    'images/TT-RS-Coupe_1.png',
    'images/TT-RS-Coupe_2.png',
    'images/TT-RS-Coupe_3.png',
    'images/TT-RS-Coupe_4.jfif'
];

let etronGTImages = [
    'images/e-tron-GT.jpg',
    'images/e-tron-GT_1.jpg',
    'images/e-tron-GT_2.jpg',
    'images/e-tron-GT_3.jpg',
    'images/e-tron-GT_4.jpg',
    'images/e-tron-GT_5.jpg'
];

let rsEtronGTImages = [
    'images/RS-e-tron-GT.png',
    'images/RS-e-tron-GT_1.jpg',
    'images/RS-e-tron-GT_2.jpg',
    'images/RS-e-tron-GT_3.jpg',
    'images/RS-e-tron-GT_4.jpg'
];

let currentImageIndex = {
    sedan: 0,
    avant: 0,
    a5: 0,
    q5Suv: 0,
    q5Sportback: 0,
    ttCoupe: 0,
    ttRsCoupe: 0,
    etronGt: 0,
    rsEtronGt: 0
};

function prevImage(type) {
    let imagesArray = getImageArray(type);
    currentImageIndex[type] = (currentImageIndex[type] === 0) ? imagesArray.length - 1 : currentImageIndex[type] - 1;
    showImage(type);
}

function nextImage(type) {
    let imagesArray = getImageArray(type);
    currentImageIndex[type] = (currentImageIndex[type] === imagesArray.length - 1) ? 0 : currentImageIndex[type] + 1;
    showImage(type);
}

function showImage(type) {
    let imageElement = document.getElementById(`carousel-image-${type}`);
    let imagesArray = getImageArray(type);
    if (imageElement && imagesArray.length > 0) {
        imageElement.src = imagesArray[currentImageIndex[type]];
    }
}

function getImageArray(type) {
    switch (type) {
        case 'sedan':
            return sedanImages;
        case 'avant':
            return avantImages;
        case 'a5':
            return a5Images;
        case 'q5Suv':
            return q5SuvImages;
        case 'q5Sportback':
            return q5SportbackImages;
        case 'ttCoupe':
            return ttCoupeImages;
        case 'ttRsCoupe':
            return ttRsCoupeImages;
        case 'etronGt':
            return etronGTImages;
        case 'rsEtronGt':
            return rsEtronGTImages;
        default:
            return [];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showImage('sedan');
    showImage('avant');
    showImage('a5');
    showImage('q5Suv');
    showImage('q5Sportback');
    showImage('ttCoupe');
    showImage('ttRsCoupe');
    showImage('etronGt');
    showImage('rsEtronGt');
});
