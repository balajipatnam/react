import AuthLayout from "../components/layouts/auth-layout";
import "./index.scss";

export default function App(props) {
  const { Component, pageProps, headerData } = props;
  /**
   * If there is no auth routes these two lines are enough to render
   */
  // const getLayout = Component.getLayout;
  // return <Component {...pageProps} />;

  /**
   * If there is no auth routes these two lines are enough to render
   */
  const getLayout = Component.getLayout
    ? (page) => <AuthLayout>{page}</AuthLayout>
    : (page) => page;

  return getLayout(<Component {...pageProps} />);
}
