import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarIcon({ img }: { img: string | undefined }) {
  return (
    <Avatar>
      <AvatarImage src={img} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
