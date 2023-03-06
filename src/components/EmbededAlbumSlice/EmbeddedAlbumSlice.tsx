import {FrontpageSlicesEmbed_Album_Section} from "../../prismic-types";
import s from "./EmbeddedAlbumSlice.module.scss";
import {Spotify} from "react-spotify-embed";
type EmbeddedAlbumSliceProps = {
  slice: FrontpageSlicesEmbed_Album_Section;
}


export const EmbeddedAlbumSlice = ({slice}: EmbeddedAlbumSliceProps) => {
  return (
    <div>
      <iframe className={s.embeddedFrame}
              src="https://open.spotify.com/embed/playlist/2hhBY8O3h8hL5MzTQmlWZs?utm_source=generator&theme=0"
              width="100%" height="352" frameBorder="0" allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
    </div>
  )
}
