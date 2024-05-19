'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Button, Space, Modal } from 'antd'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import dayjs from 'dayjs'

export default function ManageOrdersPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const ordersFound = await Api.Order.findMany({
        includes: ['occasion', 'gift'],
      })
      setOrders(ordersFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch orders', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const deleteOrder = orderId => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone',
      async onOk() {
        try {
          await Api.Order.deleteOne(orderId)
          enqueueSnackbar('Order deleted successfully', { variant: 'success' })
          fetchOrders()
        } catch (error) {
          enqueueSnackbar('Failed to delete order', { variant: 'error' })
        }
      },
    })
  }

  const columns = [
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      render: text => (text ? dayjs(text).format('YYYY-MM-DD') : 'N/A'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Occasion',
      dataIndex: ['occasion', 'occasionType'],
      key: 'occasion',
    },
    {
      title: 'Gift',
      dataIndex: ['gift', 'name'],
      key: 'gift',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => router.push(`/order/${record.id}`)}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deleteOrder(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Manage Orders</Title>
      <Text>View and manage your scheduled gift orders.</Text>
      {/* Removed the Add Order button as there's no valid path for creating a new order directly */}
      <Table
        columns={columns}
        dataSource={orders}
        rowKey="id"
        loading={loading}
      />
    </PageLayout>
  )
}
