import { Card, CardContent } from "@/components/ui/card";

function StatCard({ title, value }) {
  return(
    <Card className="max-w-xs">
        <CardContent className="p-6">
            <p>{title}</p>
            <h2>{value}</h2>
        </CardContent>
    </Card>
  )
}

export default StatCard