import { GoogleOutlined, MessageOutlined } from '@ant-design/icons';
import { Form, Input, Button, Typography, Divider, Flex } from 'antd';

const { Link, Text } = Typography;

type TFieldType = {
  username?: string;
  password?: string;
};

function LoginContainer() {
  return (
    <Flex gap="middle" vertical align="center">
      <Form name="basic" initialValues={{ remember: true }} autoComplete="off" layout="vertical">
        <Form.Item<TFieldType> name="username" rules={[{ required: true, message: '이메일을 입력해주세요!' }]}>
          <Input placeholder="이메일" prefix={<i className="fas fa-envelope" />} />
        </Form.Item>

        <Form.Item<TFieldType> name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}>
          <Input.Password placeholder="비밀번호" prefix={<i className="fas fa-lock" />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>

      <Divider plain>또는</Divider>

      <Button icon={<MessageOutlined />}>카카오로 로그인</Button>
      <Button icon={<GoogleOutlined />}>구글로 로그인</Button>
      <Text>더보기</Text>
      <Link href="#">아직 계정이 없으신가요? 회원가입</Link>
    </Flex>
  );
}

export default LoginContainer;
