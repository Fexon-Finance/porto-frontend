import PageLayout from 'layouts/PageLayout';
import { AddProject, Projects, Wallet } from 'sections';

const Page = () => {
  return (
    <PageLayout name="Wallet">
      <AddProject />
    </PageLayout>
  );
};

export default Page;
