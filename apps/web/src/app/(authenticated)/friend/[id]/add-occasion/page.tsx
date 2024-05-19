'use client'

import { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Button, Select, Typography } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddOccasionPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const fetchFriends = async () => {
      if (userId) {
        try {
          const friendsFound = await Api.Friend.findManyByUserId(userId, {
            includes: ['user'],
          })
          setFriends(friendsFound)
        } catch (error) {
          enqueueSnackbar('Failed to fetch friends', { variant: 'error' })
        }
      }
    }

    fetchFriends()
  }, [userId])

  const onFinish = async (values: any) => {
    try {
      await Api.Occasion.createOneByFriendId(params.id, {
        date: values.date.format('YYYY-MM-DD'),
        occasionType: values.occasionType,
      })
      enqueueSnackbar('Occasion added successfully', { variant: 'success' })
      router.push(`/friend/${params.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to add occasion', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>
          <CalendarOutlined /> Add New Occasion
        </Title>
        <Paragraph>
          Use this form to add a new occasion for your friend. Specify the type
          of occasion and the date.
        </Paragraph>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="occasionType"
            label="Occasion Type"
            rules={[
              { required: true, message: 'Please input the occasion type!' },
            ]}
          >
            <Input placeholder="Birthday, Anniversary, etc." />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please select the date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Occasion
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
