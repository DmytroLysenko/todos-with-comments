import React from "react";

import Layout from "../../components/Layout";
import ToDo from "../../components/ToDo";
import Comments from "../../components/Comments";

export default function Main() {
  return (
    <Layout>
      <ToDo />
      <Comments />
    </Layout>
  );
}
