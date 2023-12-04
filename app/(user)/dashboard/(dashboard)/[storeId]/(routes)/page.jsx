import { SimpleCard, SimpleCardContent, SimpleCardHeader, SimpleCardTitle } from "@/components/ui/simpleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/heading.jsx";
import { BoxesIcon, CreditCardIcon, DollarSign } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { getGraphRevenue } from "actions/getRevenue";
import Overview from "@/components/ui/overview";


export default async function Page({ params }) {
  const graphRevenue = await getGraphRevenue(params.storeId);
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <Header title="Dashboard" description="Overview of your Store" />
        <Separator />
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCardIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Product In Stock
              </CardTitle>
              <BoxesIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90</div>
            </CardContent>
          </Card>
        </div>
        <p>test</p>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>OverView</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 ">
            <Overview data={graphRevenue} />
          </CardContent>
        </Card> 
      </div>
    </div>
  );
}

/* <Suspense fallback={<p>Loading feed...</p>}>
  <PostFeed />
</Suspense>
<Suspense fallback={<p>Loading weather...</p>}>
  <Weather />
</Suspense> */
