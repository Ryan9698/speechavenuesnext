export default function SpotifyPlayer({
  url,
  width = '100%',
  height = 160, // Default height to show the full playlist
}) {
  if (!url.includes('open.spotify.com/embed')) {
    return <p className="text-red-500">Invalid Spotify embed URL</p>;
  }

  return (
    <iframe
      src={url}
      width={width}
      height={height}
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className=""
    ></iframe>
  );
}
