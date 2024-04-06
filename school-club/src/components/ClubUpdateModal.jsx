import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { updateClub } from '../services/app.club.service'; // Assuming the path to your service file is correct

const ClubUpdateModal = ({ visible, onCancel, data }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const convert = {
        clubId: values.ClubId,
        clubName: values.ClubName
      }
      const result = await updateClub(convert);
      message.success(result);
      console.log('Club created successfully:', result);
      form.resetFields();
    } catch (error) {
      console.error('Error creating club:', error);
    }
  };
  const handleCancel = () => {
    form.resetFields(); // Reset form fields when modal is canceled
    onCancel();
  };

  return (
    <Modal
      title="Update Club"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} initialValues={data}>
        <Form.Item
          label="ID"
          name="ClubId"
          rules={[{ required: true, message: 'Please enter club ID!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="ClubName"
          rules={[{ required: true, message: 'Please enter club name!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ClubUpdateModal;
