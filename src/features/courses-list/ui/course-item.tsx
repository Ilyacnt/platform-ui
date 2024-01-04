'use client'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { TCourseListElement } from '../model/types'
import { Button } from '@/shared/ui/button'
import { useTransition } from 'react'

type TCourseItemProps = {
  course: TCourseListElement
  onDelete: () => Promise<void>
}

export function CourseItem({ course, onDelete }: TCourseItemProps) {
  const [isLoadingDelete, startDeleteTransition] = useTransition()

  const handleDeleteButtonClick = () => {
    startDeleteTransition(async () => {
      await onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDeleteButtonClick}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  )
}
