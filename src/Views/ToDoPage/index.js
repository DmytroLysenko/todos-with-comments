import React from "react";

import Layout from "../../components/Layout";
import ToDo from "../../components/ToDo";
import Comments from "../../components/Comments";

const commentsList = [
  {
    id: 1,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
  {
    id: 2,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
  {
    id: 3,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
];

export default function Main() {
  return (
    <Layout>
      <ToDo />
      <Comments commentsList={commentsList} />
    </Layout>
  );
}
