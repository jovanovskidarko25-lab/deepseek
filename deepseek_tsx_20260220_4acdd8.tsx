import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AIPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Module</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Token Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">124,567</p>
            <p className="text-sm text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>API Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8,234</p>
            <p className="text-sm text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">3 in use</p>
          </CardContent>
        </Card>
      </div>
      {/* Placeholder for charts - similar to dashboard */}
    </div>
  );
}