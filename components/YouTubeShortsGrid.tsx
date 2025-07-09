export default function YouTubeShortsGrid() {
  const shorts = [
    "qURg2_j5uX4", // Replace with actual Shorts IDs
    "e0pVdbBvDwY",
    "8ewrH7Eiiok",
  ];

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {shorts.map((id, index) => (
        <div key={index} className="aspect-[9/16] w-full overflow-hidden rounded-xl shadow-lg border border-gray-700">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&playsinline=1`}
            title={`YouTube Short ${index + 1}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
