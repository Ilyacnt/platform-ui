'use client'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { createCourseAction } from '../actions'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/ui/utils'

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

type TCreateCourseForm = z.infer<typeof createCourseFormSchema>

type TCreateCourseFormProps = {
  className: string
  revalidatePagePath: string
}

export function CreateCourseForm({ className, revalidatePagePath }: TCreateCourseFormProps) {
  const [isCreateTransition, startCreateTransition] = useTransition()

  const form = useForm<TCreateCourseForm>({
    defaultValues: { name: '', description: '' },
    resolver: zodResolver(createCourseFormSchema),
  })

  const onSubmit: SubmitHandler<TCreateCourseForm> = (data) => {
    startCreateTransition(async () => {
      createCourseAction(data, revalidatePagePath)
    })
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className, 'space-y-3')}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder='Название...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder='Описание курса...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </FormProvider>
  )
}
