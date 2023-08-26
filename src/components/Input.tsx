import tw from "twin.macro";

const Input = tw.input`
  form-input w-96 rounded-md
  border-gray-300 shadow-sm font-normal
  transition hocus:border-violet-300 focus:(ring ring-violet-200/50)

  invalid:(
    border-red-300 text-red-600 ring-red-200/50
    hover:(border-red-400)
  )
`;

export default Input;
