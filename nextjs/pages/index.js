import Head from "next/head";
import Login from "../components/session/Login";
import Meta from "../components/shared/Meta";

export default function Home() {
  return (
    <>
      <Meta title="First APP" />
      <Login />
    </>
  );
}
