import { Badge } from "../ui/badge";
import Text from "./text";

const StatusBadge = () => {
  return (
    <Badge variant={"outline"} className="border-none items-center p-0 gap-2 rounded-md">
      <Text
        as="h2"
        size="caption"
        className="uppercase tracking-widest leading-none text-blue-500"
      >
        Open to work
      </Text>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
    </Badge>
  );
};

export default StatusBadge;
