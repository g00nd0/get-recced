const apiEndpoint = "http://coverartarchive.org/";

const BandRenderAlbums = ({ albumList }) => {
  return (
    <div>
      {albumList.map((album) => (
        <div>
          <img
            alt={album.title}
            src={apiEndpoint + "release-group/" + album.id + "/front-250"}
          />
          <p>
            <b>{album.title}</b> ({album["first-release-date"]})
          </p>
        </div>
      ))}
    </div>
  );
};

export default BandRenderAlbums;
