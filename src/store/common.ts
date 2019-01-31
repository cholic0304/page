import { Store } from 'redux-zero-x'

export class CommonStore extends Store {

  state = {
    globalConfig: (window as any).$GLOBALCONFIG,
  }

}
export default new CommonStore()
