import { CoursesList } from '@/features/courses-list/pub/courses-list'
import { CreateCourseForm } from '@/features/courses-list/pub/create-course-form'

export default async function Home() {
  return (
    <main className='flex flex-col min-h-screen p-6 container mx-auto max-w-screen-lg'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 mb-3'>
        Создать курс
      </h2>
      <div className='flex flex-col items-center justify-center border  p-6 rounded-lg mb-6'>
        <CreateCourseForm revalidatePagePath='/' className='w-[100%]' />
      </div>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 mb-3'>
        Список курсов
      </h2>
      <div className='flex flex-col bg-gradient-to-br from-pink-300 to-purple-500 p-6 rounded-lg'>
        <CoursesList revalidatePagePath='/' />
      </div>
    </main>
  )
}
