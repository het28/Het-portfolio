export type Region = { x: number; y: number; w: number; h: number };
export type Agent = { name: string; color: string; text?: string };
export type Target =
  | Element
  | {
      el: Element;
      regions?: Region[];
      src?: string;
    };
export type Options = {
  agents?: Agent[];
  speed?: number;
  start?: "visible" | "now";
  canvas?: string;
  zIndex?: number;
  onDone?: () => void;
};
export type PageOptions = Omit<Options, "canvas"> & { typeSpeed?: number };
export type SwarmBuild = {
  finished: Promise<void>;
  finish(): void;
  destroy(): void;
  setSpeed(speed: number): void;
};
export const DEFAULT_AGENTS: Agent[];
export function swarmBuild(targets: Target | Target[], options?: Options): SwarmBuild;
export function swarmBuildPage(blocks?: string | Element[] | NodeListOf<Element>, options?: PageOptions): SwarmBuild;
export function swarmBuildAll(selector?: string, options?: Options): SwarmBuild[];
export function parseRegions(text: string): Region[];
export function autoRegions(): Region[];
