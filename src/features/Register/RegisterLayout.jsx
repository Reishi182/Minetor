import Layout from "../../ui/Layout";
import RegisterForm from "./RegisterForm";

export default function RegisterLayout() {
  const data = {
    h1: (
      <>
        Bergabung
        <br /> Bersama kami!
      </>
    ),
    h2: (
      <>
        Daftar dan dapatkan bimbingan dengan para
        <br /> mentor berkualitas
      </>
    ),

    loginHead: "Pendaftaran Akun",
    loginText: "Yuk, buat akun mu terlebih dahulu",
  };

  return (
    <Layout data={data} size={20}>
      <RegisterForm />
    </Layout>
  );
}
