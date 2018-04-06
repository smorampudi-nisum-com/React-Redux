/* products.mock will have all the mock data for the cars needed*/
import mockProducts from './products.mock';
/* method to fetch all products fetchAll()
    async will return the cars details 
*/
export const fetchAll = async () => mockProducts;