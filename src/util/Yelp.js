const apiKey = 'j61t2FcjU_evsdr3NuM-761V7Gb9fRJU-NBHN5HcxD6cbwf0SkjNIEGptHa6hYlZ0qeFeXvb37vOi4ZYjWDehVeGsuC5U6DWGPvK_wFSaAPk__gMWAyNp_1jza8zYnYx';

const Yelp = {
    async search(term, location, sortBy) {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
    }
  };
export default Yelp;