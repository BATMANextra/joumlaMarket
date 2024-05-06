import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const parmas = useParams();
  const { slug } = parmas;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default ProductScreen;
