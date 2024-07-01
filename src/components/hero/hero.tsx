import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../shared/page-header";
import StatusBadge from "../shared/status-badge";

const Hero = () => {
  return (
    <PageHeader>
      <PageHeaderHeading className="text-balance">
        Creating digital spaces people love. Mixing creativity and technology to
        create a meaningful impact in the world.
      </PageHeaderHeading>
      <PageHeaderDescription>
        <StatusBadge />
      </PageHeaderDescription>
    </PageHeader>
  );
};

export default Hero;
