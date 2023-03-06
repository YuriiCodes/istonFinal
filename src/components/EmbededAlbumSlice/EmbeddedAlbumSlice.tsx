import {FrontpageSlicesEmbed_Album_Section} from "../../prismic-types";
import s from "./EmbeddedAlbumSlice.module.scss";

type EmbeddedAlbumSliceProps = {
  slice: FrontpageSlicesEmbed_Album_Section;
}


export const EmbeddedAlbumSlice = ({slice}: EmbeddedAlbumSliceProps) => {
  // the playlist url is  in format https://open.spotify.com/playlist/2hhBY8O3h8hL5MzTQmlWZs?si=749b142ff8254b6b.
  // Get  the album id from the url:
  const albumId = slice.variation?.primary?.playlisturl?.split("/")[4].split("?")[0];
  return (
    <div className={s.container}>
      <h2>{slice.variation?.primary?.title[0]?.text}</h2>
      <div className={s.embeddedFrameContainer}>
        <iframe className={s.embeddedFrameContainer__embeddedFrame}
                src={`https://open.spotify.com/embed/playlist/${albumId}?utm_source=generator&theme=0`}
                width="100%" height="352" frameBorder="0" allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
        </iframe>
      </div>
    </div>
  )
}
