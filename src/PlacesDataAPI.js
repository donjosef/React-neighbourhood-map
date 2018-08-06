const apiExplore = new URL('https://api.foursquare.com/v2/venues/explore?');

const params = {
    near: 'alberobello,it',
    radius: 50000,
    section: 'outdoors',
    limit: 30,
    client_id: 'WWDRPRTQ5GYPZEHGGHTGXB421MQ2NOLZETFWG1TSNDRZCYJG',
    client_secret: 'DJLCA325SMR5F2T4QAQRNXG4LKTDV4WHLM3R1G13DCO0MKLP',
    v: '200180804'
};

Object.keys(params).forEach(key => apiExplore.searchParams.append(key, params[key]));

export const getPlaces = () =>
    fetch(apiExplore)
    .then(res => res.json())
      
export const getDetails = (id) =>
fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}`)
.then(res => res.json())