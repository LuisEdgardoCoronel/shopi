import { PropsType } from "../../interface";

export default function Layout({ children }: PropsType):JSX.Element {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
    </div>
  );
}
