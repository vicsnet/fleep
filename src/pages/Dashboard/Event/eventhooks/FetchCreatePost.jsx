import { useQuery, useMutation, useQueryClient } from "react-query";

import { useSelector } from "react-redux";

const postService = new PostService();
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector(getLoginState);
  const createPost = async (data) => {
    return await postService.createPostApi(data, token);
  };

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("feeds");
    },
  });
};
