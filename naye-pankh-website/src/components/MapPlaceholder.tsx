import { HiLocationMarker } from 'react-icons/hi';

export default function MapPlaceholder() {
  return (
    <div className="w-full h-72 md:h-96 bg-neutral-200 dark:bg-neutral-700 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <HiLocationMarker className="mx-auto text-neutral-400 dark:text-neutral-500 mb-2" size={48} />
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">Map Integration</p>
        <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">123 Community Street, New Delhi</p>
      </div>
    </div>
  );
}
