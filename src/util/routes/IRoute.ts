export interface IRoute {
  id: string
  title: string
  url: string
  isExternal?: boolean
  active?: boolean
  icon?: React.ReactElement
}

export interface IRouteGroup {
  title: string
  routes: IRoute[]
}
