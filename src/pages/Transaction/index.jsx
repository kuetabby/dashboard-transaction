import { useState } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Card, Form, Row, Col, Input, Button, DatePicker, Select } from 'antd';
import { StockOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const TransactionPage = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const inputFields = [
      {
        id: 'cif',
        name: 'cif_no',
        label: 'CIF No.',
      },
      {
        id: 'investor',
        name: 'investor_name',
        label: 'Investor Name',
      },
      {
        id: 'product',
        name: 'product_name',
        label: 'Product Name',
      },
    ];

    return inputFields.map((item, i) => (
      <Col xs={24} md={8} key={i}>
        <Form.Item
          name={item.name}
          label={item.label}
          htmlFor={item.id}
          rules={[
            {
              required: true,
              message: `Please Input ${item.label}`,
            },
          ]}
        >
          <Input id={item.id} />
        </Form.Item>
      </Col>
    ));
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <div className={styles.title_wrapper}>
        <StockOutlined style={{ marginRight: '10px', color: '#a6a6a6' }} />
        <div className={styles.title}>Transaction</div>
      </div>
      <Card bordered>
        <Form
          form={form}
          name="transaction-form"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>
            <Col xs={24} md={12} lg={8}>
              <Form.Item
                name="date"
                label="Transaction Date"
                rules={[
                  {
                    type: 'array',
                    required: true,
                    message: 'Please Select Time!',
                  },
                ]}
              >
                <RangePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="type"
                label="Transaction"
                htmlFor="type"
                rules={[
                  {
                    required: true,
                    message: 'Please select Transaction!',
                  },
                ]}
              >
                <Select id="type" style={{ width: '100%' }}>
                  <Option value="all">All</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="status"
                label="Status"
                htmlFor="status"
                rules={[
                  {
                    required: true,
                    message: 'Please select Status!',
                  },
                ]}
              >
                <Select id="status" style={{ width: '100%' }}>
                  <Option value="all">All</Option>
                </Select>
              </Form.Item>
            </Col>
            {expand ? (
              <>
                {getFields()}
                <Col span={8}>
                  <Button
                    onClick={() => {
                      form.resetFields();
                    }}
                  >
                    Reset Filter
                  </Button>
                </Col>
              </>
            ) : null}
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? (
                  <>
                    <UpOutlined style={{ marginRight: '5px' }} />
                    Show less
                  </>
                ) : (
                  <>
                    <DownOutlined style={{ marginRight: '5px' }} />
                    Show more
                  </>
                )}
              </a>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default TransactionPage;
