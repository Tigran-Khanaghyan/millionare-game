import MainLayout from "../../../../../shared/components/MainLayout";
import QuestionForm from "./QuestionForm";

export default function Game() {
    return (
       <MainLayout left={<QuestionForm/>}/>
    )
}
