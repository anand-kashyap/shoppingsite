import Category from 'components/Category';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ICategory } from 'types';
import { getCategories } from 'utils/api';

const BannerCarousel = dynamic(() => import('../components/BannerCarousel'));

const Home = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    // get cats from api
    getCategories().then(setCategories);
  }, []);

  return (
    <>
      <BannerCarousel />
      {categories.length > 0 &&
        categories.map(({ id, key: keyname, ...rest }, index) => (
          <Category
            key={id}
            keyname={keyname}
            even={(index + 1) % 2 === 0}
            last={index === categories.length - 1}
            id={id}
            {...rest}
          />
        ))}
    </>
  );
};
export default Home;
