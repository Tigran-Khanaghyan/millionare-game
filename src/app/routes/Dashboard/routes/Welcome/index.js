import MainLayout from "../../../../../shared/components/MainLayout";
import Content from "./Welcome";

export default function Welcome() {
  return (
    <div>
      <MainLayout children={<Content/>} />
    </div>
  );
}
