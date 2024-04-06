import React ,{ useState, useEffect }from 'react';
import { Table, Button, message } from 'antd';
import { getAllClubs } from '../services/app.club.service';
import ClubCreateModal from '../components/ClubCreateModal';

// Sample club data


  
const handleUpdate = (record) => {
  console.log('Update club:', record);
  // Implement update logic here
};

const handleDelete = (key) => {
  console.log('Delete club with key:', key);
  // Implement delete logic here
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'ClubId',
    key: 'id',
  },
  {
    title: 'Club Name',
    dataIndex: 'ClubName',
    key: 'name',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div>
        <Button type="primary" onClick={() => handleUpdate(record)}>Update</Button>
        <Button type="danger" onClick={() => handleDelete(record.key)}>Delete</Button>
      </div>
    ),
  },
];

const ClubTable = () => {
  const [clubs, setClubs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    fetchClubs();
  }, []);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  const fetchClubs = async () => {
    try {
      const data = await getAllClubs();
      setClubs(data);
    } catch (error) {
      console.error('Error fetching clubs:', error);
      message.error('Failed to fetch clubs. Please try again later.');
    }
  };

  return (
    <>
    <div style={{display: "flex", marginLeft:"auto"}}>
    <Button type='primary' onClick={handleShowModal} name='Adding New Club'>Adding New Club</Button>
    </div>
    <ClubCreateModal visible={isModalVisible} onCancel={handleHideModal} />
    <Table
      dataSource={clubs}
      columns={columns}
      pagination={false}
    />  
    </>
  );
};

export default ClubTable;
