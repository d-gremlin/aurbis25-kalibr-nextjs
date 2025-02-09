
interface SkeletonProps {
    // empty
}

interface ComponentWithSkeleton {
    Skeleton: React.FC<SkeletonProps>
}

interface ComponentProps {

}

export const Skeleton: React.FC<SkeletonProps> = () => <></>

export const Component: ComponentWithSkeleton & React.FC<ComponentProps> = () => {
    return <></>
}

Component.Skeleton = Skeleton

export default Component 