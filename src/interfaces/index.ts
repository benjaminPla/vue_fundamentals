import { ActionContext } from "vuex";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IHomeItems {
  title: string;
  checks: string[];
}

interface IState {
  apiUrl: string;
  error?: string;
  products: IProduct[];
}
interface IMutations {
  setProducts(state: State, payload: any): void;
  setError(state: State, error: string): void;
}
interface IActions {
  getProducts(context: ActionContext<State, State>): void;
}
export interface IStore {
  state: IState;
  mutations: IMutations;
  actions: IActions;
}
