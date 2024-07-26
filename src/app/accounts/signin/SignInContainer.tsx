import { GoogleOutlined, MessageOutlined } from '@ant-design/icons';
import { Form, Input, Button, Typography, Divider, Space } from 'antd';

import type { TFieldType } from './signin.types';

const { Link, Text } = Typography;

function SignInContainer() {
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
        <Form name="login" initialValues={{ remember: true }} autoComplete="off" layout="vertical">
          <Form.Item<TFieldType> name="email" rules={[{ required: true, message: '이메일을 입력해주세요!' }]}>
            <Input placeholder="이메일" prefix={<i className="fas fa-envelope" />} />
          </Form.Item>

          <Form.Item<TFieldType> name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}>
            <Input.Password placeholder="비밀번호" prefix={<i className="fas fa-lock" />} />
          </Form.Item>

          <Form.Item>
            <Link href="#" style={{ float: 'right' }}>
              비밀번호를 잊어버리셨나요?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', backgroundColor: '#6c63ff', borderColor: '#6c63ff' }}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>

        <Divider plain>또는</Divider>

        <Form.Item>
          <Button
            icon={<MessageOutlined />}
            style={{ width: '100%', backgroundColor: '#FEE500', borderColor: '#FEE500' }}
          >
            카카오로 로그인
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            icon={<GoogleOutlined />}
            style={{ width: '100%', backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', color: '#000000' }}
          >
            구글로 로그인
          </Button>
        </Form.Item>

        <Text style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>더보기</Text>
        <Text style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
          아직 계정이 없으신가요? <Link href="#">회원가입</Link>
        </Text>
      </Space>
    </Space>
  );
}

export default SignInContainer;
