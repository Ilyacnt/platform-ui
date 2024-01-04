import { CoursesList } from '@/features/courses-list/pub/courses-list'
import { CreateCourseForm } from '@/features/courses-list/pub/create-course-form'

export default async function Home() {
  return (
    <main className='flex flex-col gap-16 min-h-screen p-4'>
      <CreateCourseForm revalidatePagePath='/' className='max-w-[300px]' />
      <CoursesList revalidatePagePath='/' />
    </main>
  )
}
