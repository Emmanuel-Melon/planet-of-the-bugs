import { transform } from "@babel/standalone";

export const transpileCode = (code: string) => {
  const options = { presets: ["es2015-loose", "react"] };
  const { code: transpiledCode } = transform(code, options);
  return transpiledCode;
};

export const executeCode = (editor) => {
  try {
    const code = editor.getValue();
    const transpiled = transpileCode(code);
    return code;
  } catch (err) {
    console.log(err);
  }
};
