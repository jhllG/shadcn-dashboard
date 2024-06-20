import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>badge1</Badge>
      <Badge variant="destructive">badge2</Badge>
      <Badge variant="secondary">badge3</Badge>
      <Badge variant="outline">badge4</Badge>
      <Badge capitalize={true} variant="info">
        badge5
      </Badge>
      <Badge toUpperCase capitalize={true} variant="success">
        badge6
      </Badge>
    </div>
  );
}
