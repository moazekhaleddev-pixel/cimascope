export default function sortAndFilterVideos(videoList) {
  const selectedVides = [...videoList]
    .sort((a, b) => new Date(b["published_at"]) - new Date(a["published_at"]))
    .reduce((acc, video) => {
      if (acc.some(({ type }) => type === video.type)) return acc;
      return [...acc, video];
    }, []);
  return selectedVides;
}
