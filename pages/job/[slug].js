import { jobs } from '../../data';

export default function SingleJob({ job }) {
  return (
    <div>
      <h2>SingleJob</h2>
      <p>{job.salary}</p>
      <h6>{job.description}</h6>
    </div>
  );
}

export const getStaticPaths = async () => {
  const job = jobs;
  const paths = job.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const job = jobs.filter((item) => item.slug === slug)[0];
  return {
    props: { job },
  };
};
