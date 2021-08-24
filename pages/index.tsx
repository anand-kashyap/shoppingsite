import BannerCarousel from 'components/BannerCarousel';
import Category from 'components/Category';
import { useEffect, useState } from 'react';
import { ICategory } from 'types';
import { getCategories } from 'utils/api';

const Home = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    // get cats from api
    getCategories().then(d => {
      console.log(d.data);
      setCategories(d.data.filter(c => !!c.imageUrl));
    });
  }, []);

  return (
    <>
      <BannerCarousel />
      {categories.length > 0 &&
        categories.map(({ id, key: keyname, ...rest }, index) => (
          <Category key={id} keyname={keyname} even={(index + 1) % 2 === 0} last={index === categories.length - 1} {...rest} />
        ))}
    </>
  );
};
export default Home;
