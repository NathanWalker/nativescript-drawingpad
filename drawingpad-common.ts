import { View, Property } from "ui/core/view";
import { Color } from "color";
import { DrawingPad as DrawingPadDefinition } from ".";

export * from "ui/core/view";

export abstract class DrawingPadBase extends View
  implements DrawingPadDefinition {
  public penColor: Color;
  public penWidth: number;
  public smoothing: boolean;

  public abstract clearDrawing(): void;
  public abstract getDrawing(): Promise<any>;
  public abstract isEmpty(): boolean;
  public getTransparentDrawing(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  public abstract getDrawingSvg(): Promise<string>;
}

export const penColorProperty = new Property<DrawingPadBase, Color>({
  name: "penColor",
  valueConverter: v => new Color(v),
  equalityComparer: Color.equals
});
penColorProperty.register(DrawingPadBase);

export const penWidthProperty = new Property<DrawingPadBase, number>({
  name: "penWidth",
  defaultValue: 1,
  valueConverter: v => +v
});
penWidthProperty.register(DrawingPadBase);

export const smoothingProperty = new Property<DrawingPadBase, boolean>({
  name: "smoothing",
  defaultValue: true,
  valueConverter: v => v === "true"
});
smoothingProperty.register(DrawingPadBase);
