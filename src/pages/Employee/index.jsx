import React from 'react';
import { UserOutlined } from '@ant-design/icons';

import styles from './index.less';

const EmployeePage = () => {
  return (
    <div>
      <div className={styles.title_wrapper}>
        <UserOutlined style={{ marginRight: '10px', color: '#a6a6a6' }} />
        <div className={styles.title}>Employee</div>
      </div>
    </div>
  );
};

export default EmployeePage;
