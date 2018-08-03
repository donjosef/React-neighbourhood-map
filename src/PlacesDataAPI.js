const apiExplore = new URL('https://api.foursquare.com/v2/venues/explore?');

const params = {
    near: 'alberobello,it',
    radius: 50000,
    section: 'outdoors',
    limit: 30,
    client_id: 'U1CLJ2FKP15TX4EIZEDOZSVJC2KJPKT4OBNEI3UDJRIINDCO',
    client_secret: 'CQF2S3FBWYRFED4RO0QUYLO4JH0TXUJ5PFK2F2OS1PJF1FA5',
    v: '200180801'
};

Object.keys(params).forEach(key => apiExplore.searchParams.append(key, params[key]));

export const getPlaces = () =>
    fetch(apiExplore)
    .then(res => res.json())
      
export const getDetails = (id) =>
fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}`)
.then(res => res.json())