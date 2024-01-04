'use server'

import { revalidatePath } from 'next/cache'
import { TCreateListElementCommand } from './model/types'
import { coursesRepository } from './courses.repository'

export const createCourseAction = async (
  command: TCreateListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command)
  revalidatePath(revalidatePagePath)
}
