import React from "react";
import { Card, Skeleton, Col, Row } from "antd";


const ProfileCardSkeleton = () => {
  return (
    <Card className="bg-white p-4 rounded">
      <Row gutter={12}>
        <Col span={12} className="mb-4 m-auto">
          <Skeleton.Avatar active size={80} />
        </Col>
        <Col span={20}>
          <Skeleton active paragraph={{ rows: 2 }} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCardSkeleton;
