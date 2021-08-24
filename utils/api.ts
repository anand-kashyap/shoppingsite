import axios from 'axios';
import { ICategory, IProduct } from 'types';

axios.defaults.baseURL = 'http://localhost:5000';

const getCategories = () =>
  axios.get('/categories').then(d =>
    (d.data as ICategory[])
      .filter(c => !!c.imageUrl)
      .sort((c1, c2) => {
        return c1.order - c2.order;
      })
  );

const getBanners = () => axios.get('/banners');
const getProducts = () =>
  axios.get<IProduct[]>('/products').then(d => {
    console.log(d.data);

    return d.data;
  });

export { getCategories, getBanners, getProducts };
