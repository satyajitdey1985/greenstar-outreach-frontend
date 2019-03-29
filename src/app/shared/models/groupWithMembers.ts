import {IStudent} from './student';
import {IGroup} from './group';

export interface IGroupWithMembers{
    group:IGroup
    members:IStudent[];
}