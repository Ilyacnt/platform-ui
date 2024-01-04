import { dbClient } from '@/shared/lib/db'
import { cache } from 'react'
import {
  TCourseListElement,
  TCreateListElementCommand,
  TDeleteListElementCommand,
} from './model/types'

class CoursesRepository {
  public getCoursesList = cache((): Promise<TCourseListElement[]> => dbClient.course.findMany())

  public createCourseElement = (
    command: TCreateListElementCommand,
  ): Promise<TCourseListElement> => {
    return dbClient.course.create({ data: command })
  }

  public deleteCourseElement = (
    command: TDeleteListElementCommand,
  ): Promise<TCourseListElement> => {
    return dbClient.course.delete({ where: { id: command.id } })
  }
}

export const coursesRepository = new CoursesRepository()
