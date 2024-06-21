"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            duration: 2000,
            description: `Sunday, December ${new Date().getFullYear()}`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            duration: 2000,
            position: "top-right",
            description: `Sunday, December ${new Date().getFullYear()}`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        <CircleCheck size={15} />
        Show Custom Colors
      </Button>
    </div>
  );
}
