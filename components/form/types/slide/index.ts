import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { AbstractType } from '../abstract.type'
import { FieldAdminProps } from '../field.admin.props'
import { FieldInputProps } from '../field.input.props'

export class SlideType extends AbstractType<string> {
  adminFormField(): ComponentType<FieldAdminProps> {
    return dynamic(() => import('./slide.admin').then((c) => c.SlideAdmin))
  }

  inputFormField(): ComponentType<FieldInputProps> {
    return dynamic(() => import('./slide.input').then((c) => c.builder(this)))
  }
}
