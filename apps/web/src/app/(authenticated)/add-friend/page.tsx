'use client'

import React, { useState } from 'react'
import { Button, Form, Input, DatePicker, Typography } from 'antd'
import {
  UserOutlined,
  CalendarOutlined,
  HeartOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddNewFriendPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      return
    }

    try {
      await Api.Friend.createOneByUserId(userId, {
        name: values.name,
        birthday: values.birthday.format('YYYY-MM-DD'),
        relationship: values.relationship,
        userId: userId,
      })
      enqueueSnackbar('Friend added successfully', { variant: 'success' })
      router.push('/dashboard')
    } catch (error) {
      enqueueSnackbar('Failed to add friend', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Add a New Friend</Title>
        <Paragraph>
          Add your friend's details to keep track of important dates and
          occasions.
        </Paragraph>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Friend's Name"
            rules={[
              { required: true, message: "Please input your friend's name!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="birthday"
            label="Birthday"
            rules={[
              {
                required: true,
                message: "Please select your friend's birthday!",
              },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[
              {
                required: true,
                message: 'Please input your relationship with your friend!',
              },
            ]}
          >
            <Input prefix={<HeartOutlined />} placeholder="Relationship" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<CalendarOutlined />}
            >
              Add Friend
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
