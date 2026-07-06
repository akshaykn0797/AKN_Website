// Bordered "card" image frame used for publication figures. Accepts a single
// image base name or an array (e.g. the ASSETS bar-chart study uses two).
// Image files live in /public/Publications/<name>.png.
//
// The frame has terracotta corner brackets around an inset dashed border for a
// gallery / contact-sheet look.
//
// fit="cover"   -> fills a fixed per-image height, cropping overflow (uniform
//                  thumbnails, e.g. the home Featured grid).
// fit="contain" -> shows the whole image inside a fixed-height frame without
//                  cropping (letterboxed on the card background). Used on the
//                  Publications page so varied figures stay clear.

function Bracket({ className }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-4 w-4 border-terra ${className}`}
    />
  );
}

function Frame({ className = '', children }) {
  return (
    <div className={`relative p-2.5 ${className}`}>
      <Bracket className="left-0 top-0 border-l-2 border-t-2" />
      <Bracket className="right-0 top-0 border-r-2 border-t-2" />
      <Bracket className="bottom-0 left-0 border-b-2 border-l-2" />
      <Bracket className="bottom-0 right-0 border-b-2 border-r-2" />
      <div className="border border-dashed border-hairline bg-card p-2">{children}</div>
    </div>
  );
}

export default function Figure({
  image,
  images,
  alt = '',
  height = 200,
  fit = 'cover',
  className = '',
}) {
  const list = images && images.length ? images : image ? [image] : [];

  if (fit === 'contain') {
    return (
      <Frame className={className}>
        <div className="flex flex-col gap-2" style={{ height }}>
          {list.map((name) => (
            <img
              key={name}
              src={`/Publications/${name}.png`}
              alt={alt}
              loading="lazy"
              className="block min-h-0 w-full flex-1 object-contain"
            />
          ))}
        </div>
      </Frame>
    );
  }

  const each = list.length > 1 ? Math.round((height - 8 * (list.length - 1)) / list.length) : height;

  return (
    <Frame className={className}>
      <div className="flex flex-col gap-2">
        {list.map((name) => (
          <img
            key={name}
            src={`/Publications/${name}.png`}
            alt={alt}
            loading="lazy"
            className="block w-full object-cover"
            style={{ height: each }}
          />
        ))}
      </div>
    </Frame>
  );
}
