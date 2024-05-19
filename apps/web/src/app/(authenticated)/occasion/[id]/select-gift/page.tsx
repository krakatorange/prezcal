'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Select, Card, Button, Row, Col, Spin } from 'antd'
import { GiftOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SelectGiftPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [gifts, setGifts] = useState([])
  const [selectedGift, setSelectedGift] = useState<string | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const giftsFound = await Api.Gift.findMany()
        setGifts(giftsFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to load gifts. Please try again.', {
          variant: 'error',
        })
        setLoading(false)
      }
    }

    fetchGifts()
  }, [])

  const handleGiftSelection = (giftId: string) => {
    setSelectedGift(giftId)
  }

  const handleOrderCreation = async () => {
    if (!selectedGift) {
      enqueueSnackbar('Please select a gift before proceeding.', {
        variant: 'info',
      })
      return
    }

    try {
      await Api.Order.createOneByGiftId(selectedGift, {
        orderDate: dayjs().format('YYYY-MM-DD'),
        status: 'Pending',
        occasionId: params.id,
      })
      enqueueSnackbar('Order successfully created!', { variant: 'success' })
      router.push(`/occasion/${params.id}/select-gift`)
    } catch (error) {
      enqueueSnackbar('Failed to create order. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <GiftOutlined /> Select a Gift
        </Title>
        <Text>Select a gift for the special occasion.</Text>
        {loading ? (
          <Spin tip="Loading gifts..." />
        ) : (
          <Row gutter={[16, 16]}>
            {gifts.map(gift => (
              <Col key={gift.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  title={gift.name}
                  onClick={() => handleGiftSelection(gift.id)}
                >
                  <Text>{gift.description}</Text>
                  <br />
                  <Text strong>Price: ${gift.price}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        <Button
          type="primary"
          onClick={handleOrderCreation}
          disabled={!selectedGift}
          style={{ marginTop: '20px' }}
        >
          Create Order
        </Button>
      </div>
    </PageLayout>
  )
}
