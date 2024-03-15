import { get, getDatabase, limitToFirst, query, ref } from 'firebase/database';
import { IFood } from '../../types/foods';
import { toast } from 'react-toastify';

const getFoods = async (limit: number) => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, 'foods');

    const snapshot = await get(query(dbRef, ...[limitToFirst(limit)]));

    const foods: IFood[] = [];

    snapshot.forEach((childSnapshot) => {
      foods.push(Object.assign({ id: childSnapshot.key }, childSnapshot.val()));
    });

    return foods;
  } catch (error: any) {
    toast(error.message);
    return [];
  }
};

const foodsApi = {
  getFoods,
};

export default foodsApi;
