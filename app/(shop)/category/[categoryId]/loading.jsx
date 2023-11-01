import Container from "app/component/ui/container";
import Skeleton from "app/component/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]"/>
        <div className="h-full mt-8 lg:grid lg:grid-cols-5 lg:gap-x-8">
          <div className="hidden lg:block">
            <Skeleton className="w-full h-[500px] rounded-xl" />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
              <Skeleton className="aspect-square rounded-xl"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Loading;