import { Calendar, Clock } from "lucide-react";
import Text from "./text";
import { relativeTime, calculateReadingTime } from "@/lib/utils";

interface PostDetailsProps {
  publishedDate: string;
  content: PostContent;
}

const PostDetails = ({ publishedDate, content }: PostDetailsProps) => {
  return (
    <div className="flex flex-wrap items-stretch justify-start gap-4">
      <div className="flex shrink-0 items-center gap-2">
        <Calendar size={18} aria-label="Published Date" />
        <Text as="span" size="caption" className="text-muted-foreground">
          {relativeTime(publishedDate)}
        </Text>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Clock size={18} aria-label="Reading Time" />
        <Text as="span" size="caption" className="text-muted-foreground">
          {calculateReadingTime(content)}
        </Text>
      </div>
    </div>
  );
};

export default PostDetails;
