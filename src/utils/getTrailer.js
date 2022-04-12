const getTrailer = (videos) => {
  const trailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
  return trailer;
};

export default getTrailer;
