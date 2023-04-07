import { UIState } from './UIProvider';

type UIActionType =
| { type: 'UI - Open Siderbav'}
| { type: 'UI - Close Siderbav'}

export const uiReducer =(state:UIState,action:UIActionType):UIState=>{
   switch (action.type) {
      case 'UI - Open Siderbav':
            return {
               ...state,
               sidemenuOpen:true,
            }
      case 'UI - Close Siderbav':
           return{
               ...state,
               sidemenuOpen:false
           }
      default:
           return state;
   }
}