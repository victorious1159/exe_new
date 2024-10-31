import React, { useEffect, useState } from 'react'
import { getAllOrders } from './FetchApi'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const ChartOrder = () => {
  const [dataOrders, setDataOrders] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await getAllOrders()
    console.log(res) // Log to verify the structure
    if (res && Array.isArray(res.Orders)) {
      setDataOrders(processChartData(res.Orders)) // Pass the Orders array to processChartData
    } else {
      console.error("Unexpected response format", res)
    }
  }

  const processChartData = (orders) => {
    const monthlyOrderCounts = Array(12).fill(0)
    orders.forEach(order => {
      const month = new Date(order.createdAt).getMonth()
      monthlyOrderCounts[month] += 1
    })
    return monthlyOrderCounts.map((count, index) => ({
      month: new Date(0, index).toLocaleString('default', { month: 'short' }),
      orders: count,
    }))
  }

  return (
    <ResponsiveContainer width="100%" height={500} style={{marginRight: "40px"}}> 
      <BarChart data={dataOrders}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="orders" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartOrder
