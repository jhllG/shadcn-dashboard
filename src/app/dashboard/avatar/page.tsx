import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage
          src="https://lh3.googleusercontent.com/a/ACg8ocKwh4uILgPT9JvZqQxrvp9TIX_aGxjB61LUIy-1DNas6y455UjF=s288-c-no"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p className="m-2">@Jhosell</p>
    </div>
  );
}
