// turns an SVG string into an <img> src; `fill` recolors single-color brand glyphs
export default function svgDataUri(svg: string, fill?: string): string {
  const colored = fill ? svg.replace(/fill="#[0-9a-fA-F]{3,8}"/, `fill="${fill}"`) : svg;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(colored)}`;
}
