import { Badge } from "../ui/badge";
import Text from "./text";

const StatusBadge = () => {
  return (
    <Badge variant={"outline"}>
      <Text
        as="h2"
        size="small"
        className="uppercase tracking-widest leading-none p-2"
      >
        Open to work
      </Text>
      <span className="w-2 h-2 bg-blue-500 rounded-full gap-2 animate-pulse" />
    </Badge>
  );
};

export default StatusBadge;
