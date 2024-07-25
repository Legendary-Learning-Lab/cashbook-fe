import { Form, Input, Button, Typography, Space } from 'antd';

const { Title, Text, Link } = Typography;

type TFieldType = {
  name?: string;
  email?: string;
  password?: string;
};

function SignUpContainer() {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: '100%', height: '100vh', justifyContent: 'center', backgroundColor: '#f8f9fa' }}
    >
      <Space
        direction="vertical"
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Title level={3} style={{ textAlign: 'center', marginBottom: '1rem' }}>
          계정을 생성하세요
        </Title>
        <Form name="signup" initialValues={{ remember: true }} autoComplete="off" layout="vertical">
          <Form.Item<TFieldType> name="name" rules={[{ required: true, message: '이름을 입력해주세요!' }]}>
            <Input placeholder="이름" prefix={<i className="fas fa-user" />} />
          </Form.Item>

          <Form.Item<TFieldType> name="email" rules={[{ required: true, message: '이메일을 입력해주세요!' }]}>
            <Input placeholder="이메일" prefix={<i className="fas fa-envelope" />} />
          </Form.Item>

          <Form.Item<TFieldType> name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}>
            <Input.Password placeholder="비밀번호" prefix={<i className="fas fa-lock" />} />
          </Form.Item>

          <Form.Item>
            <Text type="secondary">영문, 숫자, 특수문자를 조합하여 8자 이상으로 구성해주세요.</Text>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', backgroundColor: '#6c63ff', borderColor: '#6c63ff' }}
            >
              회원가입
            </Button>
          </Form.Item>
        </Form>

        <Text style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
          이미 계정이 있으신가요? <Link href="#">로그인하기</Link>
        </Text>
      </Space>
    </Space>
  );
}

export default SignUpContainer;
