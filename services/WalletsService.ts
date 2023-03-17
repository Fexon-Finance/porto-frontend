/* eslint-disable react-hooks/rules-of-hooks */
import axios, { Axios } from 'axios';
import { useUser } from 'hooks/useUser';

export interface ITransaction {
  tokenAmount: number,
  tokenId: string,
  accountId: string,
  projectName: string,
  projectId: string;
}

export class WalletsService {
  axios: Axios;

  constructor() {
    const user = useUser();
    
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/',
      headers: {
        Authorization: user.token
      }
    });
  }

  async getTransactions(id: string) {
    const response = await this.axios.get(`/api/wallet/${id}/transactions`);

    return response.data;
  }

  async getBalance(id: string) {
    const response = await this.axios.get(`/api/wallet/${id}/balance`);

    return response.data;
  }

  async initTransaction(id: string, data: ITransaction) {
    const response = await this.axios.post(`/api/wallet/${id}/transactions`, data);

    return response.data;
  }

}
