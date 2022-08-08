import { useQuery } from "@tanstack/react-query";
import useSWR from "swr";
import http from "../modules/http";

export interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  technologies: string[];
  __v: number;
}

export interface Response {
  data: Project[];
  statusCode: number;
  message: string;
}

export const fetcher = async () => {
  const { data } = await http.get<Response>("/projects");
  return data.data;
};

export function useProject(initial: Project[]) {
  return useQuery([`projects`], fetcher, {
    initialData: initial
  });
}
