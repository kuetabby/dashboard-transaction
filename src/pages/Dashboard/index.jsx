import React from 'react';
import { Card } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import RGL, { WidthProvider } from 'react-grid-layout';

import styles from './index.less';

const ResponsiveReactGridLayout = WidthProvider(RGL);

const DashboardPage = () => {
  const generateLayout = () => {
    return [...Array(6).keys()].map((item, i) => {
      const height = Math.ceil(Math.random() * 2) + 1;
      return {
        x: 0,
        y: Math.floor(item / 2) * height,
        w: 2,
        h: height,
        i: i.toString(),
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
        <ResponsiveReactGridLayout
          className="layout"
          layouts={layouts}
          cols={3}
          // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          rowHeight={30}
        >
          {generateList()}
        </ResponsiveReactGridLayout>
      </Card>
    </div>
  );
};

export default DashboardPage;
