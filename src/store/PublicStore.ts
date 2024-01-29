import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

class PublicStore {
  publicContacts:[] = []


  constructor() {
    makeAutoObservable(this);
  }


getContacts = async() => {
  let token
  if(typeof localStorage !== 'undefined'){
      const auth = localStorage.getItem('AuthStore')
      const authToken = JSON.parse(auth!) || ''
      token = authToken.accessToken
  }
    try {
      const response = await axios.get(`/api/getContacts?token=${token}`);
        console.log(response.data)
        this.publicContacts = response.data
    } catch (error) {
        console.log(error)
    }
}


}


const publickStore = new PublicStore();
const StoreContext = createContext(publickStore);

export const usePublickStore = () => useContext(StoreContext);
export default publickStore;
