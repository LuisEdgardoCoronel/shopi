import { PropsType } from "../../interface";

export default function Layout({ children }: PropsType):JSX.Element {
  return (
    <div className="flex flex-col pt-20 items-center  h-screen overflow-y-scroll pb-5">
      {children}
    </div>
  );
}
