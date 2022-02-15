import React from 'react';
import { Card } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { Responsive, WidthProvider } from 'react-grid-layout';

import styles from './index.less';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardPage = () => {
  const generateLayout = () => {
    return [...Array(6).keys()].map((item) => {
      const height = Math.ceil(Math.random() * 2) + 1;
      return {
        x: 0,
        y: Math.floor(item / 2) * height,
        w: 2,
        h: height,
      };
    });
  };

  const layouts = { lg: generateLayout() };

  const generateList = () => {
    return layouts.lg.map((item, i) => {
      const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'pink'];
      return <div key={i} style={{ backgroundColor: colors[i] }} />;
    });
  };

  return (
    <div>
      <div className={styles.title_wrapper}>
        <HomeOutlined style={{ marginRight: '10px', color: '#a6a6a6' }} />
        <div className={styles.title}>Dashboard</div>
      </div>
      <Card bordered>
        <div style={{ width: '100%' }}>
          <ResponsiveReactGridLayout
            layouts={layouts}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={15}
            className="layout"
          >
            {generateList()}
          </ResponsiveReactGridLayout>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
