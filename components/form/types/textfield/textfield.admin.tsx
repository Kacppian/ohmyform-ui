import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FieldAdminProps } from '../field.admin.props'

export const TextfieldAdmin: React.FC<FieldAdminProps> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <Form.Item
        label={t('type:textfield:default')}
        name={[props.field.name as string, 'defaultValue']}
        labelCol={{ span: 6 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('type:imageUrl.default')}
        name={[props.field.name as string, 'imageUrl']}
        rules={[{ type: 'url', message: t('validation:invalidUrl') }]}
        labelCol={{ span: 6 }}
      >
        <Input type={'url'} />
      </Form.Item>
    </>
  )
}
