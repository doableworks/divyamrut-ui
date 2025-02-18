import { Button, Form, Input, Modal, Row, Col } from "antd";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import Divider from "../common/Divider";

export default function ConsentForm({ isOpen, handleCloseConsentForm }) {
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    handleCloseConsentForm(false);
  };

  const handleSubmitConsentForm = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "70%",
        xl: "70%",
        xxl: "70%",
      }}
    >
      <div className="grid grid-cols-1 gap-4 p-5">
        <div>
          <p className="highlight-heading">Therpay Consent Form</p>
          <Divider />
        </div>
        <Form
          name="consentForm"
          wrapperCol={{ span: 24 }}
          onFinish={handleSubmitConsentForm}
          autoComplete="off"
          className="w-full"
        >
          <div className="max-h-72 overflow-y-auto overflow-x-hidden p-6">
            <Row gutter={[16, 16]}>
              {[
                {
                  name: "height",
                  label: "Height",
                  placeholder: "Enter your height (e.g., 170 cm)",
                },
                {
                  name: "weight",
                  label: "Weight",
                  placeholder: "Enter your weight (e.g., 70 kg)",
                },
                {
                  name: "chiefComplaint",
                  label: "Chief complaint",
                  placeholder: "Describe your chief complaint",
                },
                {
                  name: "previousTreatment",
                  label: "Previous treatment",
                  placeholder: "Provide details of previous treatments",
                },
                {
                  name: "currentMedications",
                  label: "Current medications",
                  placeholder: "List your current medications",
                },
                {
                  name: "medicalHistory",
                  label: "Any other medical history",
                  placeholder: "Mention any other relevant medical history",
                },
                {
                  name: "sleepDuration",
                  label: "Sleep duration",
                  placeholder: "Enter your sleep duration (e.g., 7 hours)",
                },
                {
                  name: "sleepQuality",
                  label: "Quality of sleep",
                  placeholder: "Describe the quality of your sleep",
                },
                {
                  name: "stressLevel",
                  label: "Stress level",
                  placeholder: "Rate your stress level on a scale of 1 to 10",
                },
                {
                  name: "personalScore",
                  label: "Personal",
                  placeholder: "Personal score (e.g., 7/10)",
                },
                {
                  name: "professionalScore",
                  label: "Professional",
                  placeholder: "Professional score (e.g., 8/10)",
                },
              ].map((field, index) => (
                <Col xs={24} lg={12} key={index}>
                  <Form.Item
                    name={field.name}
                    rules={[
                      {
                        required: true,
                        message: `Please enter your ${field.label.toLowerCase()}!`,
                      },
                    ]}
                  >
                    <div className="font-bold mb-1">{field.label}:</div>
                    <Input placeholder={field.placeholder} />
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </div>
          <Form.Item className="w-full">
            <CustomButton
              htmlType="submit"
              className="site-button-primary w-full"
              title="Next"
              loading={loading}
              type="submit"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
