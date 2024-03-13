
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useQuery } from "@tanstack/react-query"
import { getRebates } from "../../api/hostelAdminQueries"
import DashboardLoader from "@/Loader/DashboardLoader"

export default function RebatePage(){
  const rebateQuery = useQuery({
    queryKey: ['adminRebates'],
    queryFn: getRebates
  });
  if(rebateQuery.isLoading){
    return (<DashboardLoader/>)
  }
  const rebateDetails = rebateQuery.data;
    return (
        <div className="w-[98%] overflow-hidden customScrollbar min-h-[91svh] max-h-[91svh] bg-[#222831] text-white rounded-lg mx-auto my-auto overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-2">
          <div>
            <Card className="m-6">
                  <CardHeader>
                    <CardTitle>Today's Rebated Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">5</p>
                      <div className="text-gray-500">As of March 12, 2024</div>
                    </div>
                  </CardContent>
            </Card>
          </div>
          <div className="m-6">
            <Card>
                <CardHeader>
                  <CardTitle>Tomorrow's Rebated Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">7</p>
                    <div className="text-gray-500">As of March 13, 2024</div>
                  </div>
                </CardContent>
            </Card>
          </div>
          </div>
          <Card className="mx-6">
            <CardContent className="p-0 grid">
              <div className="sm:overflow-auto">
                <Table className="min-w-[800px] min-h-[65svh]">
                  <TableHeader className="">
                    <TableRow>
                      <TableHead  className="font-semibold text-black">Student Name</TableHead>
                      <TableHead  className="font-semibold text-black">Room Number</TableHead>
                      <TableHead  className="font-semibold text-black">Rebate Start Date</TableHead>
                      <TableHead  className="font-semibold text-black">Rebate End Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rebateDetails.map((rebate: any, index: any) => (
                      <TableRow key={index}>
                        <TableCell>{rebate.student.name}</TableCell>
                        <TableCell>{rebate.student.room_number}</TableCell>
                        <TableCell>{new Date(rebate.from).toLocaleDateString('en-IN')}</TableCell>
                        <TableCell>{new Date(rebate.to).toLocaleDateString('en-IN')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <Card className="m-6">
            <CardHeader>
              <CardTitle>Check Rebate Count</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 md:gap-6">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="future-date">
                    Select Future Date
                  </Label>
                  <Input id="future-date" type="date" />
                </div>
                <div className="flex justify-end">
                  <Button>Check</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
    )
}