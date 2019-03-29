import { IState} from "./state";

export interface ICity{
    CityID:number;
    CityName:string;
    statID:number;
    state:IState;
}