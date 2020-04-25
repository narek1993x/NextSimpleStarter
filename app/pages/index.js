import Head from "components/Head";
import Layout from "hoc/Layout";

const Main = () => {
  return (
    <Layout>
      <div className="Main">
        <Head title="Home" />
        <h1>Main Page</h1>
      </div>
    </Layout>
  );
};

Main.getInitialProps = async ({ store }) => {
  const { deviceInfo } = store.getState().global;
  return {
    deviceInfo,
  };
};

export default Main;
