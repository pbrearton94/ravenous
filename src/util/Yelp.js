import { useEffect, useState } from "react";

const apiKey =
  "Xfkr6T3OS1Z0Nl_UrHntgyqPh-I1uXcaiWbE3DmmD0UAPUi_4vgtPsWxoq8Cn0edKMMKkiJz3WqV6FgvujrrCE5QvcXERILdsh6O8_fwz2JGtri5-_zXNQp0ljp_ZHYx";

// const Yelp = (term, location, sortBy) => {
//   const [businesses, setBusinesses] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
//       {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//           accept: "application/json",
//           "x-requested-with": "xmlhttprequest",
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log(responseJson);
//         setBusinesses(responseJson.businesses);
//       });
//     return businesses;
//   }, []);
// };

const Yelp = {
    async search(term, location, sortBy) {
      const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
            }
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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
