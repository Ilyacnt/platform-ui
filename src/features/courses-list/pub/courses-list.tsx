import { revalidatePath } from 'next/cache'
import { coursesRepository } from '../courses.repository'
import { CourseItem } from '../ui/course-item'

type TCoursesListProps = {
  revalidatePagePath: string
}

export async function CoursesList({ revalidatePagePath }: TCoursesListProps) {
  const coursesList = await coursesRepository.getCoursesList()

  const handleDeleteAction = async (courseId: string) => {
    'use server'
    await coursesRepository.deleteCourseElement({ id: courseId })
    revalidatePath(revalidatePagePath)
  }

  return (
    <div className='flex flex-col gap-4 '>
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  )
}
