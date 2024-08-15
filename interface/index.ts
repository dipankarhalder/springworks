import { ReactNode } from "react";

export type IChildren = {
  children: ReactNode;
};

export interface IProfileProps {
  params: {
    id: string;
  };
}
