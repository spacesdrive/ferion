import { useEffect, useState, type RefObject } from 'react';

const RADIUS = 24;
const TAB_DEPTH = 24;
const TAB_SLOPE = 46;

// the front pocket has its tab on the left
export function frontPocketPath(width: number, height: number): string {
  const tab = Math.round(width * 0.42);
  return `M0 ${RADIUS}A${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} 0L${tab} 0C${tab + TAB_SLOPE * 0.55} 0 ${tab + TAB_SLOPE * 0.45} ${TAB_DEPTH} ${tab + TAB_SLOPE} ${TAB_DEPTH}L${width - RADIUS} ${TAB_DEPTH}A${RADIUS} ${RADIUS} 0 0 1 ${width} ${TAB_DEPTH + RADIUS}L${width} ${height - RADIUS}A${RADIUS} ${RADIUS} 0 0 1 ${width - RADIUS} ${height}L${RADIUS} ${height}A${RADIUS} ${RADIUS} 0 0 1 0 ${height - RADIUS}Z`;
}

// the back plate has its tab on the right
export function backPlatePath(width: number, height: number): string {
  const tab = width - Math.round(width * 0.4);
  return `M0 ${TAB_DEPTH + RADIUS}A${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} ${TAB_DEPTH}L${tab - TAB_SLOPE} ${TAB_DEPTH}C${tab - TAB_SLOPE * 0.45} ${TAB_DEPTH} ${tab - TAB_SLOPE * 0.55} 0 ${tab} 0L${width - RADIUS} 0A${RADIUS} ${RADIUS} 0 0 1 ${width} ${RADIUS}L${width} ${height - RADIUS}A${RADIUS} ${RADIUS} 0 0 1 ${width - RADIUS} ${height}L${RADIUS} ${height}A${RADIUS} ${RADIUS} 0 0 1 0 ${height - RADIUS}Z`;
}

// redraws the outline whenever the element changes size, so the tab fits the real card width
export function useFolderShape(
  ref: RefObject<HTMLElement | null>,
  makePath: (width: number, height: number) => string,
): string {
  const [path, setPath] = useState('');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setPath(makePath(element.offsetWidth, element.offsetHeight)));
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, makePath]);

  return path;
}
