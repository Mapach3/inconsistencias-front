import { Button, Form, Input, message } from "antd";
import useForm from "antd/lib/form/hooks/useForm";
import { useState } from "react";
import { useHistory } from "react-router";
import LoginService from "../api/login/LoginService";
import { ClientRoutes } from "../config/enums";
import Layout from "../layout/Layout";
import { LoginResponse } from "../models/models";

interface LoginFormProps {
  usuario: string;
  contraseña: string;
}

const Login: React.FC = () => {
  const [form] = useForm<LoginFormProps>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      debugger;
      setIsSubmitting(true);
      let values = await form.validateFields();

      const response = await LoginService.logInWithUsernameAndPassword(
        values.usuario,
        values.contraseña
      );

      let token = (response!.response as LoginResponse).accessToken;
      localStorage.setItem("InconsistenciasAPP.JWT", token);
      localStorage.setItem("InconsistenciasAPP.Usuario", values.usuario);
      message.success("Login exitoso!");
      debugger;
      setTimeout(() => history.push(ClientRoutes.DASHBOARD), 1000);
    } catch (error: any) {
      if (error.message) {
        message.error(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          autoComplete="off"
          onSubmitCapture={handleSubmit}
        >
          <Form.Item
            label="Usuario"
            name="usuario"
            rules={[{ required: true, message: "Completa este campo" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="contraseña"
            rules={[{ required: true, message: "Completa este campo" }]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Ingresar
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
