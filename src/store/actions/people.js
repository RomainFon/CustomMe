export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_GLASSES = 'UPDATE_GLASSES';
export const UPDATE_ZOOM_GLASSES = 'UPDATE_ZOOM_GLASSES';
export const UPDATE_ZOOM_HAT = 'UPDATE_ZOOM_HAT';
export const UPDATE_HAT = 'UPDATE_HAT';

export const updateImage = (imgUrl) => ({
    type: UPDATE_IMAGE,
    imgUrl
});

export const updateGlasses = (glassesUrl) => ({
    type: UPDATE_GLASSES,
    glassesUrl
});

export const updateZoomGlasses = (zoomGlasses) => ({
    type: UPDATE_ZOOM_GLASSES,
    zoomGlasses
});


export const updateHat = (hatUrl) => ({
    type: UPDATE_HAT,
    hatUrl
});

export const updateZoomHat = (zoomHat) => ({
    type: UPDATE_ZOOM_HAT,
    zoomHat
});