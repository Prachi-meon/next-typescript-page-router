import Link from "next/link";

const Preview = ({ data, editMode }: { data: string; editMode: boolean }) => {
  return (
    <>
      <h2 className="content">{data}</h2>
      {editMode ? (
        <Link href="/api/disable-preview?redirect=/preview">Disable Edit</Link>
      ) : (
        <Link href="/api/preview?redirect=/preview">Enable Edit</Link>
      )}
    </>
  );
};

export default Preview;

export const getStaticProps = async (context: any) => {
  return {
    props: {
      data: context.preview
        ? "List of draft content"
        : "List of Published content",
      editMode: context.preview ? true : false,
    },
  };
};
