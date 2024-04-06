import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { saveClub } from '../services/app.club.service'; // Assuming the path to your service file is correct

const ClubCreateModal = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const result = await saveClub(values);
      message.success(result);
      console.log('Club created successfully:', result);
      form.resetFields();
    } catch (error) {
      console.error('Error creating club:', error);
    }
  };

  return (
    <Modal
      title="Create New Club"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form form={form}>
        <Form.Item
          label="ID"
          name="clubId"
          rules={[{ required: true, message: 'Please enter club ID!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="clubName"
          rules={[{ required: true, message: 'Please enter club name!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ClubCreateModal;
