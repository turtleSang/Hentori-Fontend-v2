export default function ButtonAccept({ title }: { title: string }) {
  return (
    <button
      type="submit"
      className="duration-200 bg-brown-1  text-slate-200 hover:bg-yellow-base hover:text-slate-950 py-2 px-5 rounded-md"
    >
      {title}
    </button>
  );
}
