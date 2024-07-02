import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../shared/page-header";
import StatusBadge from "../shared/status-badge";

const Hero = () => {
  return (
    <PageHeader className="py-8">
      <PageHeaderHeading className="text-balance">
        Mixing creativity and technology to create a meaningful impact in the world.
      </PageHeaderHeading>
      <PageHeaderDescription className="text-end">
        <StatusBadge />
      </PageHeaderDescription>
    </PageHeader>
  );
};

export default Hero;
