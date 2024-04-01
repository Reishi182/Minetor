import Layout from "../../ui/Layout";
import LoginForm from "./LoginForm";

export default function LoginLayout() {
  const data = {
    h1: (
      <>
        Selamat datang
        <br /> di Minetor!
      </>
    ),
    h2: (
      <>
        Bergabunglah bersama kami untuk meningkatkan
        <br /> skill mu bersama para mentor!
      </>
    ),

    loginHead: "Masuk ke Akun mu",
    loginText: "Yuk, lanjutin pembelajaran bersama mentormu!",
  };

  return (
    <Layout data={data} size={36}>
      <LoginForm />
    </Layout>
  );
}
