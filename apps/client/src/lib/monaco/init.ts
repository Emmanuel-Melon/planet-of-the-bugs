export type StateType = "editing" | "error";
export type ErrorMessageType = string;

export interface TranspiledCodeType {
  iframeCode: string;
  sourceCode: string;
}
