'use client'

import React, { useEffect, useState } from 'react'
import {
  Calendar,
  Modal,
  Button,
  Typography,
  Row,
  Col,
  List,
  Avatar,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GiftSchedulingCalendarPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [friends, setFriends] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    if (userId) {
      Api.Friend.findManyByUserId(userId, { includes: ['occasions'] })
        .then(setFriends)
        .catch(() =>
          enqueueSnackbar('Failed to fetch friends', { variant: 'error' }),
        )
    }
  }, [userId])

  const handleDateSelect = value => {
    setSelectedDate(value.format('YYYY-MM-DD'))
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    enqueueSnackbar('Occasion added successfully', { variant: 'success' })
    // Here you would typically call an API to save the occasion based on selectedDate
    // and then fetch the updated friends list to reflect the new occasion in the UI
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Gift Scheduling Calendar</Title>
          <Text>
            Choose a date to schedule a gift for your friends on their special
            occasions.
          </Text>
          <Calendar onSelect={handleDateSelect} />
          <Modal
            title="Add Occasion"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Selected Date: {selectedDate}</p>
            <p>
              Add an occasion for this date. This feature is under development.
            </p>
          </Modal>
          <List
            itemLayout="horizontal"
            dataSource={friends}
            renderItem={friend => (
              <List.Item
                actions={[
                  <Button
                    type="link"
                    icon={<PlusOutlined />}
                    onClick={() =>
                      router.push(`/friend/${friend.id}/add-occasion`)
                    }
                  >
                    Add Occasion
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={friend.pictureUrl} />}
                  title={
                    <a onClick={() => router.push(`/friend/${friend.id}`)}>
                      {friend.name}
                    </a>
                  }
                  description={`Next occasion: ${friend.occasions?.[0] ? dayjs(friend.occasions[0].date).format('DD MMM YYYY') : 'No occasions scheduled'}`}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
