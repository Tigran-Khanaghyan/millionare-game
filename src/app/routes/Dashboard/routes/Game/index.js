import MainLayout from "../../../../../shared/components/MainLayout";
import Content from "./Game";

export default function Game() {
    return (
       <MainLayout children={<Content/>}/>
    )
}
