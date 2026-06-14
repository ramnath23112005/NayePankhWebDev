export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md animate-pulse">
      <div className="h-48 bg-neutral-200 dark:bg-neutral-700" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-1/3" />
        <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3" />
      </div>
    </div>
  );
}
