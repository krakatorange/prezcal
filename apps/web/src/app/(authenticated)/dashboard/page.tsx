'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Avatar, Space, Grid } from 'antd'
import {
  UserOutlined,
  CalendarOutlined,
  GiftOutlined,
  TeamOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FriendsDashboardPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [friends, setFriends] = useState([])
  const screens = useBreakpoint()

  useEffect(() => {
    if (userId) {
      Api.Friend.findManyByUserId(userId, {
        includes: ['occasions', 'calendars'],
      })
        .then(setFriends)
        .catch(() =>
          enqueueSnackbar('Failed to fetch friends', { variant: 'error' }),
        )
    }
  }, [userId])

  const navigateTo = path => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Friends Dashboard
          </Title>
          <Text
            type="secondary"
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Manage your friends, schedule gifts, and view calendars.
          </Text>
        </Col>
        <Col span={screens.xs ? 24 : 20} lg={16}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card onClick={() => navigateTo('/add-friend')} hoverable>
                <Space direction="vertical" align="center">
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Text>Add New Friend</Text>
                </Space>
              </Card>
            </Col>
            {friends?.map(friend => (
              <Col key={friend.id} span={8}>
                <Card
                  hoverable
                  actions={[
                    <CalendarOutlined
                      key="calendar"
                      onClick={() =>
                        navigateTo(`/friend/${friend.id}/calendar`)
                      }
                    />,
                    <GiftOutlined
                      key="gift"
                      onClick={() =>
                        navigateTo(`/friend/${friend.id}/add-occasion`)
                      }
                    />,
                    <TeamOutlined
                      key="detail"
                      onClick={() => navigateTo(`/friend/${friend.id}`)}
                    />,
                  ]}
                >
                  <Card.Meta
                    avatar={
                      <Avatar
                        src={friend.user?.pictureUrl || undefined}
                        icon={!friend.user?.pictureUrl && <UserOutlined />}
                      />
                    }
                    title={friend.name}
                    description={`Birthday: ${dayjs(friend.birthday).format('MMMM D')}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
