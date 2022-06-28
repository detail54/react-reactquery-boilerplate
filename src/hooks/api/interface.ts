/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostBody extends Omit<IPost, 'id'> {}
