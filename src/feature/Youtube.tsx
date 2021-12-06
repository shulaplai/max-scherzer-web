import PropTypes from "prop-types";

const YoutubeEmbed = (props: any) => (
  <div>
    <div className="w-full-height">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export { YoutubeEmbed };
