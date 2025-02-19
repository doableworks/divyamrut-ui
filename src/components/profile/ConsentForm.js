import { Button, Form, Input, Modal, Row, Col, message } from "antd";
import CustomButton from "../common/CustomButton";
import { useEffect, useState } from "react";
import Divider from "../common/Divider";
import axios from "axios";
import { useSession } from "next-auth/react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const formFields = [
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
];

export default function ConsentForm({
  isOpen,
  handleCloseConsentForm,
  consentFormData,
  setSuccessedConsentForm
}) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    handleCloseConsentForm(false);
  };
  console.log(session);

  const handleSubmitConsentForm = async (values) => {
    if (!session) {
      messageApi.error("You must be logged in to submit the form.");
      return;
    }

    try {
      setLoading(true);

      const url = `${apiUrl}/api/consent-forms/`;
      const headers = {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      };

      const body = {
        user: session.user.user.email,
        height: values.height,
        weight: values.weight,
        chief_complaint: values.chiefComplaint,
        previous_treatment: values.previousTreatment,
        current_medications: values.currentMedications,
        any_other_medical_history: values.medicalHistory,
        sleep_duration: values.sleepDuration,
        quality_of_sleep: values.sleepQuality,
        stress_level: values.stressLevel,
        personal: values.personalScore,
        professional: values.professionalScore,
        user_appointment: consentFormData.uid,
      };

      await axios.post(url, body, { headers });

      messageApi.success("Consent form submitted successfully!");

      setTimeout(() => {
        setSuccessedConsentForm(consentFormData.uid)
        handleCancel();
      }, 300);
    } catch (err) {
      messageApi.error("Failed to submit the form. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={!loading && handleCancel}
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
            <p className="highlight-heading">Therapy Consent Form</p>
            <Divider />
          </div>
          <Form
            key={isOpen}
            name="consentForm"
            wrapperCol={{ span: 24 }}
            onFinish={handleSubmitConsentForm}
            autoComplete="off"
            className="w-full"
            form={form}
            layout="vertical"
            initialValues={{
              layout: "vertical",
            }}
          >
            <div className="max-h-72 overflow-y-auto overflow-x-hidden p-6">
              <Row gutter={[16, 16]}>
                {formFields.map((field, index) => (
                  <Col xs={24} lg={12} key={index}>
                    <Form.Item
                      name={field.name}
                      label={field.label}
                      rules={[
                        {
                          required: true,
                          message: `Please enter your ${field.label.toLowerCase()}!`,
                        },
                      ]}
                    >
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
                title="Submit"
                loading={loading}
                type="submit"
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}
