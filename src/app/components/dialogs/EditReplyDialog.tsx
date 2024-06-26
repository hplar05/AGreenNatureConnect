import { toast } from "@/lib/hooks/use-toast";
import React, { useState, useTransition } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { editReply } from "../../../../actions/reply";
import { Button } from "../Ui/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../Ui/Dialog";
import { Input } from "../Ui/Input";

interface EditReplyDialogProps {
  replyId: string;
  text: string;
  onDelete: () => void;
}

export const EditReplyDialog: React.FC<EditReplyDialogProps> = ({
  replyId,
  text,
  onDelete,
}) => {
  const [value, setValue] = useState<string>(text);
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="flex gap-1 hover:underline w-full">
          <AiOutlineEdit /> Edit
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit reply</DialogTitle>
        <Input
          defaultValue={text}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Button
          variant="newGreen"
          isLoading={isPending}
          onClick={() => {
            startTransition(() => {
              editReply(replyId, value).then((data) => {
                if (data.error) {
                  toast({
                    description: data.error,
                    variant: "destructive",
                  });
                  setOpen(false)
                }

                if (data.success) {
                  toast({
                    description: data.success,
                  });
                  onDelete(); // Call onDelete function
                  setValue(""); // Clear the input value
                  setOpen(false)
                }
              });
            });
          }}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
