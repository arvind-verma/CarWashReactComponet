import { ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import PageContainer from '../components/layout/PageContainer';

export default function NotFound() {
  return (
    <PageContainer title="Page not found">
      <section className="grid min-h-[80vh] place-items-center bg-ink px-4 pt-24 text-center text-snow">
        <div>
          <p className="font-display text-8xl font-semibold text-snow/15">404</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page took a wrong turn.</h1>
          <p className="mx-auto mt-4 max-w-md text-snow/60">
            The page you're looking for doesn't exist or has moved. Let's get you back on the road.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/" variant="light" icon={<ArrowLeft className="h-4 w-4" />}>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
