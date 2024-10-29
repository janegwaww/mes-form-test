import { useState } from "react"
import { Form, Input, Row, Col, Button, DatePicker, Select, Table, InputNumber } from "antd"
import columns from "./columns"


export default () => {
  const [table, setTable] = useState([])

  const onFinish = (values) => {
    const num = values?.name3
    const items = []

    for(let i = 0; i < num; i++) {
      items.push(values)
    }

    setTable(items)
  }

  return (
    <div style={{ border: '1px solid #81ecec', width: 800, textAlign: 'left' }}>
      <Form onFinish={onFinish}>
        <div style={{ backgroundColor: '#81ecec' }}>整经任务单</div>
        <div style={{ padding: 8 }}>
          <Row gutter={[18, 0]}>
            <Col span={8}>
              <Form.Item
                label="任务编号"
                name="taskNo"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="计划日期"
                name="name1"
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="整经机台号"
                name="name2"
              >
                <Select />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="盘头套数"
                name="name3"
                rules={[
                  {
                    required: true,
                    message: '请输入盘头套数!',
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="每套盘头个数"
                name="name4"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="整头总数"
                name="name5"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="计划条数"
                name="name6"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="计划长度(M)"
                name="name7"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="盘头类型"
                name="name8"
              >
                <Select options={{ value: '1', label: 'first' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="盘头尺寸"
                name="name9"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="原料名称"
                name="name10"
              >
                <Select options={{ value: '1', label: 'first' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="原料批号"
                name="name11"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="转数(转)"
                name="name12"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="张力(N)"
                name="name13"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="牵伸比"
                name="name14"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="单双层"
                name="name15"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="是否加油"
                name="name16"
              >
                <Select options={{ value: '1', label: 'first' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="计划总长度(M)"
                name="name17"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="分纱针数(针)"
                name="name18"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="机台速度(m/min)"
                name="name19"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="备注"
                name="name20"
                style={{ marginBottom: 0 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: '#81ecec' }}>客户信息</div>
        <div style={{ padding: 8 }}>
          <Row gutter={[16, 0]}>
            <Col span={8}>
              <Form.Item
                label="订单编号"
                name="name21"
                style={{ marginBottom: 0 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="客户名称"
                name="name22"
                style={{ marginBottom: 0 }}
              >
                <Select options={{ value: '1', label: 'first' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="交货日期"
                name="name23"
                style={{ marginBottom: 0 }}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: '#81ecec' }}>客户信息</div>
        <div style={{ padding: 8 }}>
          <Row gutter={[16, 0]}>
            <Col span={8}>
              <Form.Item
                label="已产个数"
                name="name24"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="待产个数"
                name="name25"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="已产长度(M)"
                name="name26"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="待产长度(M)"
                name="name27"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="任务进度(%)"
                name="name28"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{ marginBottom: 0 }}
          >
            <Button type="primary" htmlType="submit">
              生成整经抽卡
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div style={{ backgroundColor: '#81ecec' }}>整经抽卡信息</div>
      <div style={{ padding: 8 }}>
        <Table
          columns={columns()}
          dataSource={table}
          scroll={{
            x: 'max-content',
          }}
        />
      </div>
    </div>
  )
}