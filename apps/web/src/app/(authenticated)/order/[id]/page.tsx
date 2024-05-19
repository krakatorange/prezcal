'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Button, Spin } from 'antd'
import {
  ClockCircleOutlined,
  GiftOutlined,
  CalendarOutlined,
  HomeOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function OrderDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [orderDetails, setOrderDetails] = useState<Model.Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const ordersFound = await Api.Order.findMany({
          filters: { id: { eq: params.id } },
          includes: ['occasion', 'gift'],
        })
        if (ordersFound.length > 0) {
          setOrderDetails(ordersFound[0])
        } else {
          enqueueSnackbar('Order not found', { variant: 'error' })
          router.push('/orders')
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch order details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchOrderDetails()
  }, [params.id, router])

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2}>Order Details</Title>
        <Text>Here you can see the details of your order.</Text>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Card>
            <Row gutter={16}>
              <Col span={24}>
                <Title level={4}>
                  <CalendarOutlined /> Order Date
                </Title>
                <Text>
                  {dayjs(orderDetails?.orderDate).format('DD MMM YYYY')}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={4}>
                  <ClockCircleOutlined /> Delivery Date
                </Title>
                <Text>
                  {orderDetails?.deliveryDate
                    ? dayjs(orderDetails.deliveryDate).format('DD MMM YYYY')
                    : 'Not specified'}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={4}>
                  <GiftOutlined /> Gift
                </Title>
                <Text>{orderDetails?.gift?.name}</Text>
              </Col>
              <Col span={24}>
                <Title level={4}>
                  <HomeOutlined /> Occasion
                </Title>
                <Text>{orderDetails?.occasion?.occasionType}</Text>
              </Col>
            </Row>
            <Button
              type="primary"
              style={{ marginTop: '20px' }}
              onClick={() => router.push('/orders')}
            >
              Back to Orders
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}
