import { http,HttpResponse  } from "msw";
import { usersListJson} from "@mocks/users";
import {postsJson} from "@mocks/posts";

export const handlers = () => {
   const list = [
      http.get(`*/recommendation/suggest-person`, () => {

         return HttpResponse.json(usersListJson)
      }),
      http.get(`*/feed/all-posts/:userId`, ({params}) => {
         const { userId } = params;
         return HttpResponse.json(postsJson(userId.toString()))
      }),


   ];
   return list;
};
