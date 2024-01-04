export type TCourseListElement = {
  id: string
  name: string
  description: string
}

export type TCreateListElementCommand = {
  name: string
  description: string
}

export type TDeleteListElementCommand = {
  id: string
}
