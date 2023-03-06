import {FrontpageSlicesEmbed_Album_Section} from "../../prismic-types";
import s from "./EmbeddedAlbumSlice.module.scss";
type EmbeddedAlbumSliceProps = {
  slice: FrontpageSlicesEmbed_Album_Section;
}


export const EmbeddedAlbumSlice = ({slice}: EmbeddedAlbumSliceProps) => {
  return (
    <div>
      <pre>
        {JSON.stringify(slice.variation?.primary?.title[0]?.text)}
      </pre>
      <pre>
        {JSON.stringify(slice.variation?.primary?.playlisturl)}
      </pre>
      <iframe className={s.embeddedFrame}
              src="https://open.spotify.com/embed/playlist/2hhBY8O3h8hL5MzTQmlWZs?utm_source=generator&theme=0"
              width="100%" height="352" frameBorder="0" allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
    </div>
  )
}
