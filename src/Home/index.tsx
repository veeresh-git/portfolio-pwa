import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let POSTS = [
  {
    label: "post1",
    key: "1",
  },
  {
    label: "post2",
    key: "2",
  },
  {
    label: "post3",
    key: "3",
  },
];

const Home = () => {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => json),
  });

  const mutationQuery = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => {
        POSTS.push({ key: Math.random().toString(), label: title });
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  console.log(postQuery.data, "postQuery");

  if (postQuery.isLoading) return <div>Loading...!</div>;
  if (postQuery.error) return <div>Error...!</div>;

  return (
    <div>
      <ul>
        {postQuery.data?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

const wait = (duration: any) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
