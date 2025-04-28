import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  createdAt: Date;
  user?: {
    name: string | null;
    email: string | null;
  } | null;
}

export function RecentInquiries({ inquiries }: { inquiries: Inquiry[] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "resolved":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "processing":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "GENERAL":
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
      case "PRODUCT":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "SUPPORT":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
      case "PARTNER":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  return (
    <div className="space-y-8">
      {inquiries.length === 0 ? (
        <p className="text-center text-muted-foreground py-6">No inquiries yet</p>
      ) : (
        inquiries.map((inquiry) => (
          <div key={inquiry.id} className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{inquiry.name}</p>
              <p className="text-sm text-muted-foreground">{inquiry.email}</p>
              <div className="flex items-center gap-2 pt-1">
                <Badge variant="outline" className={getTypeColor(inquiry.type)}>
                  {inquiry.type.toLowerCase()}
                </Badge>
                <Badge variant="outline" className={getStatusColor(inquiry.status)}>
                  {inquiry.status}
                </Badge>
              </div>
            </div>
            <div className="ml-auto font-medium">
              {formatDate(inquiry.createdAt)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}