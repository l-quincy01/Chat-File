declare module "markmap-lib/dist/transform" {
  export function transform(markdown: string): {
    root: any;
    features: Record<string, any>;
  };
}

declare module "markmap-view/dist/view" {
  export class Markmap {
    static create(
      el: string | SVGSVGElement,
      options: any | null,
      data: any
    ): Markmap;
  }

  export function loadPlugins(
    plugins: string[],
    options?: Record<string, any>
  ): Promise<void>;
}
