import type { MenuItem, CafeInfo, Review } from '../types';
import contentData from '../../content.json';

export const CAFE_INFO: CafeInfo = contentData.CAFE_INFO as CafeInfo;
export const MENU_ITEMS: MenuItem[] = contentData.MENU_ITEMS as MenuItem[];
export const REVIEWS: Review[] = contentData.REVIEWS as Review[];
