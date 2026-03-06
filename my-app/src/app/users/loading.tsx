export default function Loading() {
  return (
    <main className="p-8">
      <div className="animate-pulse space-y-3">
        <div className="h-8 w-32 bg-gray-200 rounded" />
        <div className="h-5 w-64 bg-gray-200 rounded" />
        <div className="h-5 w-48 bg-gray-200 rounded" />
      </div>
    </main>
  );
}
