/*
Advantages
---------------
Эта секция отображает карточки преимуществ.

Карточки преимуществ это Pointы, для каждой из которых есть:

    - Иконка или изображение
    - Заголовок
    - Короткий текст

Секция получает данные из контекста страницы. 
    * WorkSteps - собственно карточки
    * DataStatus - состояние
    * Heading - 

Если данные не получены то отображается скелетон. 

*/

import { ReactNode } from "react"
import WorkStepCard from "./WorkStepCard"

interface BasicPoint {

}

const PageSection = ({ children }: { children?: ReactNode }) => (
    <section>{
        children
    }</section> 
)

PageSection.Header = ({ children }: { children?: ReactNode }) => (
    <section>{
        children
    }</section> 
)

PageSection.Container = ({ children }: { children?: ReactNode }) => (
    <div>{
        children
    }</div> 
)

const Paragraph: BasicReactComponent<{ children?: ReactNode }> = ({ children }) => (
    <div>{
        children
    }</div> 
)
Paragraph.Skeleton = () => (<></>)

type BasicReactComponent<Props = { children?: ReactNode }> = React.FC<Props> & { Skeleton: any }

const Heading: BasicReactComponent<> = ({ children }) => (
    <div>{
        children
    }</div> 
)

Heading.Skeleton = () => (<></>)


const isGoodStatus = (a?: any) => false 

//////////////////////////////////////////
interface WorkStepsSection {
    section:    PageSection,
    content:    BasicPoint[],
    status:     PayloadStatus
}


const WorkSteps = () => {
    //UI Prep
    const Card = WorkStepCard;
    const Section = PageSection;

    const status = {}
    
    return (
        <Section>

        {!isGoodStatus(status) 
        ? (<>
            <Section.Header>
                <Heading.Skeleton />
            </Section.Header>
            <Section.Container>
                <Paragraph.Skeleton />
            </Section.Container>
            <Section.Container>
            
                <Card.Skeleton />
                <Card.Skeleton />
                <Card.Skeleton />
                <Card.Skeleton />
            </Section.Container>
            </>
        ) : ( 

        )}
        </Section>
    )
}

export default WorkSteps;