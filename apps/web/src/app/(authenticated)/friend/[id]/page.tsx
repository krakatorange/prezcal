'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, List, Button } from 'antd'
import { CalendarOutlined, GiftOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FriendDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [friend, setFriend] = useState(null)
  const [occasions, setOccasions] = useState([])

  useEffect(() => {
    const fetchFriendDetails = async () => {
      try {
        const friendDetails = await Api.Friend.findOne(params.id, {
          includes: ['user', 'occasions', 'occasions.orders'],
        })
        setFriend(friendDetails)
        setOccasions(friendDetails.occasions ?? [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch friend details', { variant: 'error' })
      }
    }

    if (params.id) {
      fetchFriendDetails()
    }
  }, [params.id])

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12}>
          <Title level={2}>Friend Details</Title>
          <Card>
            <Row gutter={16} align="middle">
              <Col>
                <Avatar
                  size={64}
                  src={friend?.pictureUrl}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col>
                <Title level={4}>{friend?.name}</Title>
                <Text>Relationship: {friend?.relationship}</Text>
                <br />
                <Text>
                  Birthday: {dayjs(friend?.birthday).format('DD MMM YYYY')}
                </Text>
              </Col>
            </Row>
          </Card>
          <Title level={3}>Upcoming Occasions</Title>
          <List
            itemLayout="horizontal"
            dataSource={occasions}
            renderItem={occasion => (
              <List.Item
                actions={[
                  <Button
                    type="link"
                    icon={<CalendarOutlined />}
                    onClick={() =>
                      router.push(`/friend/${friend?.id}/calendar`)
                    }
                  >
                    View Calendar
                  </Button>,
                  <Button
                    type="link"
                    icon={<GiftOutlined />}
                    onClick={() =>
                      router.push(`/occasion/${occasion.id}/select-gift`)
                    }
                  >
                    Select Gift
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={occasion.occasionType}
                  description={`Date: ${dayjs(occasion.date).format('DD MMM YYYY')}`}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
