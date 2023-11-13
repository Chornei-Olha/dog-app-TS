// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import BreedCard from '../../molecules/BreedCard';
// import { useGetImagesQuery } from '../../../services/images';
// import { useGetBreedByIdQuery } from '../../../services/breeds';

// const BreedDetailsPage = () => {
//   const { breedId } = useParams();
//   const [breedDetails, setBreedDetails] = useState(null);
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const fetchBreedDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://api.thedogapi.com/v1/breeds/:breed_id/${breedId}`
//         );
//         const data = await response.json();
//         setBreedDetails(data);
//       } catch (error) {
//         console.error('Error fetching breed details:', error);
//       }
//     };

//     fetchBreedDetails();
//   }, [breedId]);

//   const addToFavorite = () => {
//     setIsFavorite(true);
//   };

//   const deleteFromFavorite = () => {
//     setIsFavorite(false);
//   };

//   if (!breedDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <BreedCard
//         id={breedDetails.id}
//         isFavorite={isFavorite}
//         image={breedDetails.image}
//         name={breedDetails.name}
//         temperament={breedDetails.temperament}
//       />
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '100%',
//           height: '68%',
//           objectFit: 'cover',
//           borderRadius: '20px'
//         }}
//       />
//       <button onClick={isFavorite ? deleteFromFavorite : addToFavorite}>
//         {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//       </button>
//     </div>
//   );
// };

// export default BreedDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetBreedByIdQuery } from '../../../services/breeds';

interface BreedDetails {
  id: string;
  image: string;
  name: string;
  temperament: string;
  weight: {
    metric: string;
  };
  height: {
    metric: string;
  };
  lifeSpan: string;
  origin: string;
}

// interface BreedDetailsProps {
//   breedId: BreedDETAILS;
// }

const BreedDetails: React.FC<> = () =>
  // id,
  // image,
  // name,
  // temperament,
  // weight,
  // height,
  // lifeSpan,
  // origin
  {
    const { breedId } = useParams<{ breedId: string }>();
    const { data, isLoading } = useGetBreedByIdQuery(breedId);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {}, []);

    const { image, name, weight, height, lifeSpan, origin, temperament } =
      data as BreedDetails;

    const handleFavoriteToggle = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <div>
        <div>
          <img src={image} alt={name} />
          <button onClick={handleFavoriteToggle}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
        <div>
          <h1>{name}</h1>
          <p>Weight Range: {weight.metric}</p>
          <p>Height: {height.metric}</p>
          <p>Life span: {lifeSpan}</p>
          <p>Origin: {origin}</p>
          <p>Temperament: {temperament}</p>
        </div>
      </div>
    );
  };

export default BreedDetails;
