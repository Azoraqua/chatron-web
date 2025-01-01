export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,183,255,0.15),rgba(0,0,0,0)_80%)]" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,183,255,0.08),rgba(0,0,0,0)_60%)]" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,183,255,0.12),rgba(0,0,0,0)_70%)]" />
    </div>
  );
}