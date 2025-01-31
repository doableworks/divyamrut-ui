import React from "react";
import { Card, Skeleton, Col, Row } from "antd";

const CalendarSkeleton = () => {
  return (
    <Card className="bg-white p-4 rounded">
      <Row gutter={[8, 8]}>
        {Array.from({ length: 35 }).map((_, index) => (
          <Col key={index} span={3}>
            <Skeleton.Button
              active
              size="small"
              block
              style={{
                height: 50,
                borderRadius: 8,
                margin:2
              }}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default CalendarSkeleton;
