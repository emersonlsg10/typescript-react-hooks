import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle } from "react";

interface FormProps {
  initialData?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
  function submit() {
    alert("salvou!");
  }

  useImperativeHandle(ref, () => ({
    submit,
  }));

  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};
export default forwardRef(Form);
